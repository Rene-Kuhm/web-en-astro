// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Register ScrollTrigger plugin if it's available
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);

        // --- Hero Section Animations ---
        // Elements start with opacity: 0 (set in style.css)
        // Animate .hero h1, .hero p, .hero button to their visible state (opacity: 1, transform: none)

        gsap.to(".hero h1", {
            duration: 1.2,
            y: 0, // Target y
            opacity: 1,
            ease: "power1.out",
            delay: 0.3
        });

        gsap.to(".hero p", {
            duration: 1.2,
            y: 0, // Target y
            opacity: 1,
            ease: "power1.out",
            delay: 0.6
        });

        gsap.to(".hero button", {
            duration: 1,
            scale: 1, // Target scale
            opacity: 1,
            ease: "back.out(1.7)",
            delay: 1.0
        });

        // --- Section 1 Animations (Scroll-triggered) ---
        // Elements start with opacity: 0 and transformed (set in style.css)
        // Animate #section1 h2, #section1 p to visible state (opacity: 1, transform: none)

        gsap.to("#section1 h2", {
            scrollTrigger: {
                trigger: "#section1",
                start: "top 80%",
                once: true
            },
            duration: 1,
            x: 0, // Target x
            opacity: 1,
            ease: "power1.out"
        });

        gsap.to("#section1 p", {
            scrollTrigger: {
                trigger: "#section1",
                start: "top 75%",
                once: true
            },
            duration: 1,
            x: 0, // Target x
            opacity: 1,
            ease: "power1.out",
            delay: 0.3
        });


        // --- Section 2 Animations (Scroll-triggered) ---
        // Elements start with opacity: 0 and transformed (set in style.css)
        // Animate #section2 h2, #section2 p to visible state (opacity: 1, transform: none)

        gsap.to("#section2 h2", {
            scrollTrigger: {
                trigger: "#section2",
                start: "top 80%",
                once: true
            },
            duration: 1.2,
            y: 0, // Target y (animating from -50px set in CSS)
            opacity: 1,
            ease: "elastic.out(1, 0.6)", // Elastic ease works well with y-transform
        });

        gsap.to("#section2 p", {
            scrollTrigger: {
                trigger: "#section2",
                start: "top 70%",
                once: true
            },
            duration: 1,
            y: 0, // Target y (animating from 20px set in CSS)
            opacity: 1,
            ease: "power1.out",
            delay: 0.4 // Stagger after h2 of section 2
        });

        // Simple hover animation for the paragraph in Section 2
        const section2P = document.querySelector("#section2 p");
        if (section2P) {
            section2P.addEventListener("mouseenter", () => {
                gsap.to(section2P, {
                    duration: 0.3,
                    scale: 1.05,
                    color: "#3498db",
                    ease: "power1.inOut"
                });
            });

            section2P.addEventListener("mouseleave", () => {
                gsap.to(section2P, {
                    duration: 0.3,
                    scale: 1,
                    color: "#555",
                    ease: "power1.inOut"
                });
            });
        }

        console.log("GSAP animations refined and initialized.");

    } else {
        console.error("GSAP or ScrollTrigger not loaded!");
    }
});
