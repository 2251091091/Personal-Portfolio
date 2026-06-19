// ===== Contact.js =====
// Contact / Footer section related JavaScript

(function () {
    'use strict';

    // Footer link hover effect - subtle active state for current section
    var footerLinks = document.querySelectorAll('.footer-col a[href^="#"]');
    footerLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            var target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Social links open in new tab (if href is updated later)
    var socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                window.open(href, '_blank');
            }
        });
    });
})();