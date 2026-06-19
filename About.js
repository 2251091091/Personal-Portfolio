// ===== About.js =====
// Intersection Observer for About section scroll animations (stat-items, info-cards)

(function () {
    'use strict';

    var observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

    var aboutObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate stat items
    document.querySelectorAll('.stat-item').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        aboutObserver.observe(el);
    });

    // Animate info cards
    document.querySelectorAll('.info-card').forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        aboutObserver.observe(el);
    });
})();