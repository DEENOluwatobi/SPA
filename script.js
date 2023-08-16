document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".menu ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.remove("active");
                }
            });

            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            const offset = targetSection.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: offset,
                behavior: "smooth"
            });
        });
    });

    window.addEventListener("scroll", () => {
        const currentScroll = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;

            if (currentScroll >= sectionTop) {
                const id = section.getAttribute("id");
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    const animatedElements = document.querySelectorAll(".animate-fade-right, .animate-fade-up, .animate-fade-down");
        animatedElements.forEach(element => {
            element.style.animationPlayState = "running";
        });
    


    const gallery = document.querySelector(".gallery");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    const scrollAmount = 350; 

    prevButton.addEventListener("click", function() {
        gallery.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    nextButton.addEventListener("click", function() {
        gallery.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });


});