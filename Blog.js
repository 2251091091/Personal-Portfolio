// ===== Blog.js =====
// Intersection Observer for Blog section scroll animations (blog-cards)

(function () {
    'use strict';

    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    var blogObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate blog cards
    document.querySelectorAll('.blog-card').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        blogObserver.observe(el);
    });
})();