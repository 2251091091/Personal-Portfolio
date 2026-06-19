// ===== Gallery.js =====
// Gallery data, Lightbox open/close/navigate, Keyboard navigation, Scroll animations

(function () {
    'use strict';

    // Gallery data for lightbox navigation
    var galleryData = [
        { src: 'https://z-cdn-media.chatglm.cn/files/15e36d40-6a37-4bc7-a70f-61212cf52af5.jpg?auth_key=1881866317-55f4442ffdb5493f9519dcde1771a6e1-0-19f346d9277031402ce63ce651b835ee', caption: 'Campus Moment' },
        { src: 'https://z-cdn-media.chatglm.cn/files/76c7bfc8-27f4-41d1-a8b0-17018da25d0c.jpg?auth_key=1881866317-a4c4272fceeb48d1a63662be1d996f37-0-700a7d9d68027eda862ab208b1e8c891', caption: 'At Uttara University' },
        { src: 'https://z-cdn-media.chatglm.cn/files/9ec339be-b5b2-4312-9f16-9f08ef2e6494.jpg?auth_key=1881866317-d0522507a5224b38a2c00e31ff54b4fd-0-d63dca09b0ae902cb4bd01f81b5061e8', caption: 'Outdoor Vibes' },
        { src: 'https://z-cdn-media.chatglm.cn/files/26a1bb79-60e3-4b39-b6f9-46df7cba58fa.jpg?auth_key=1881866317-8bd1144d11114dca9833c7b87ef01117-0-f863def84ce9519d64badcb19fc15a9f', caption: 'Green Nature' },
        { src: 'https://z-cdn-media.chatglm.cn/files/cce144aa-12dd-442f-8506-163fb6cffbf0.jpg?auth_key=1881866317-7304f5d078f141ed9fa069c321e06618-0-afccdc0413baf875857e3c39af9e7c18', caption: 'Lakeside View' },
        { src: 'https://z-cdn-media.chatglm.cn/files/93dea573-cae3-466b-8657-99990084c691.jpg?auth_key=1881866317-88b960d5e101401fa2852919f037938d-0-367a71e1c70d04402c3167359e9ee3f5', caption: 'FIFA Event at Campus' },
        { src: 'https://z-cdn-media.chatglm.cn/files/84248f2f-4864-4029-a3f4-be08ba901695.jpg?auth_key=1881866317-14b8689af0af4ed9a8e9b1f9b864ecb0-0-4a15a0da6d1d4a7c0fc853b901a65cf8', caption: 'World Cup Trophy Moment' },
        { src: 'https://z-cdn-media.chatglm.cn/files/bb766dc8-45b0-4aea-a3f7-f76b456096fb.jpg?auth_key=1881866317-282d8a5518464f3d880388acedce56bf-0-00ab4f96b328fc636e3512b4b61986ca', caption: 'Football Jersey Day' }
    ];

    var currentLightboxIndex = 0;

    // Make functions globally accessible for onclick handlers in HTML
    window.openLightbox = function (index) {
        currentLightboxIndex = index;
        updateLightbox();
        document.getElementById('lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
        document.getElementById('lightbox').classList.remove('active');
        document.body.style.overflow = '';
    };

    window.navigateLightbox = function (direction, event) {
        if (event) event.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + direction + galleryData.length) % galleryData.length;
        updateLightbox();
    };

    function updateLightbox() {
        document.getElementById('lightbox-img').src = galleryData[currentLightboxIndex].src;
        document.getElementById('lightbox-caption').textContent = galleryData[currentLightboxIndex].caption;
    }

    // Keyboard navigation for lightbox
    document.addEventListener('keydown', function (e) {
        if (!document.getElementById('lightbox').classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Close lightbox on overlay click
    var lightboxOverlay = document.getElementById('lightbox');
    if (lightboxOverlay) {
        lightboxOverlay.addEventListener('click', function (e) {
            if (e.target === lightboxOverlay || e.target.tagName === 'IMG') {
                closeLightbox();
            }
        });
    }

    // Intersection Observer for gallery items scroll animation
    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    var galleryObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.gallery-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        galleryObserver.observe(el);
    });
})();