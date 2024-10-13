//dynamically add aria-current to the current page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav_bar_links a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.setAttribute('aria-current', 'page');
        }
    });
});

