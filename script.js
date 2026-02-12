document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    // Function to set active link based on click
    function setActiveLink() {
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');
    }

    // Add click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', setActiveLink);
    });

    // Optional: Set initial active state based on URL hash or default to first
    const currentHash = window.location.hash;
    let initialLink = document.querySelector(`.nav-links a[href="${currentHash}"]`) || navLinks[0];

    if (initialLink) {
        initialLink.classList.add('active');
    }
});
