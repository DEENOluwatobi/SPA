document.addEventListener("DOMContentLoaded", function() {

    // SCROLL SPY --------------
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

    // ANIMATIONS ---------------
    const animatedElements = document.querySelectorAll(".animate-fade-right, .animate-fade-up, .animate-fade-down");
    animatedElements.forEach(element => {
        element.style.animationPlayState = "running";
    });

    const exploreTitle = document.querySelector('.explore-title');
    const exploreSection = document.querySelector('.explore-section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                exploreTitle.classList.add('active');
                observer.unobserve(exploreSection);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(exploreSection);

    // SVG ANIMATE  -------------------
    const svgContainer = document.querySelector('.svg-con');
    const svgObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                svgContainer.classList.add('active');
                svgObserver.unobserve(section2);
            }
        });
    }, { threshold: 0.5});
    svgObserver.observe(section2);

    // ABOUT PAGE ANIMATE----------------
    const aboutSection = document.querySelector('.section3');
    const h1 = aboutSection.querySelector('h1');

    const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
    };

    const AboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        h1.style.opacity = '1';
        h1.style.transform = 'translateY(0)';
        AboutObserver.unobserve(h1);
        }
    });
    }, observerOptions);
    AboutObserver.observe(h1);


    // ABOUT FLOATS ANIMATION ------------------------
    const imageElements = document.querySelectorAll('.chef-img, .abt-img1, .abt-img2');
    const svgAbout = document.querySelector('.svg-about svg');

    const FloatObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
            FloatObserver.unobserve(entry.target);
        }
    });
    }, observerOptions);

    imageElements.forEach(element => {
        FloatObserver.observe(element);
    });
    FloatObserver.observe(svgAbout);

   

    
    // GALLERY SCROLLER ---------
    const slider = document.querySelector(".slider__content");
    const prevButton = document.querySelector(".slider__nav__button--prev");
    const nextButton = document.querySelector(".slider__nav__button--next");

    function scrollLeft() {
        slider.scrollBy({ left: -slider.offsetWidth, behavior: 'smooth' });
    }

    function scrollRight() {
        slider.scrollBy({ left: slider.offsetWidth, behavior: 'smooth' });
    }

    prevButton.addEventListener("click", scrollLeft);
    nextButton.addEventListener("click", scrollRight);
});