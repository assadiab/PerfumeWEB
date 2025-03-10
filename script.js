document.addEventListener("DOMContentLoaded", function () {
    VANTA.WAVES({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 500.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xAA7940
    });

    gsap.fromTo("#bottle", 
        { opacity: 0, y: 200, scale: 0.5 }, 
        { opacity: 1, y: 0, scale: 1, duration: 2, ease: "power2.out", scrollTrigger: {
            trigger: "#bottle",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }}
    );

    gsap.fromTo("#bottle-text", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power2.out", scrollTrigger: {
            trigger: "#bottle",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }}
    );
});
