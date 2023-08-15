document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".menu ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Toggle background color of the clicked link
            link.classList.toggle("active");
            
            // Remove active class and background color from other links
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove("active");
                }
            });

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Calculate the offset taking into account the fixed menu height
            const offset = targetSection.getBoundingClientRect().top + window.scrollY - 60;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    const animatedElements = document.querySelectorAll(".animate-fade-right, .animate-fade-up, .animate-fade-down");
    animatedElements.forEach(element => {
        element.style.animationPlayState = "running";
    });
});