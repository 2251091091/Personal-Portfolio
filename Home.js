// ===== Home.js =====
// Navbar scroll effect, Smooth scroll, Scroll-to-top button, Mobile menu toggle

(function () {
    'use strict';

    // Navbar scroll effect - add 'scrolled' class on scroll
    window.addEventListener('scroll', function () {
        var nav = document.getElementById('navbar');
        var btn = document.getElementById('scrollTopBtn');
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Close mobile menu
            document.querySelector('.nav-links').classList.remove('show');
        });
    });

    // Scroll to top button click
    var scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile nav toggle
    var navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            document.querySelector('.nav-links').classList.toggle('show');
        });
    }
})();