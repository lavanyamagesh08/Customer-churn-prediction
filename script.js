// Select all sections and navigation links
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Add an event listener for the scroll event
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Loop through each section to check if it’s in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is within the current viewport
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    // Remove active class from all links, then add to the current section’s link
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
