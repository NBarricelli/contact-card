// Defines glow effect on website //
const glow = document.querySelector(".cursor-glow");

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    document.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        glow.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
        glow.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        glow.style.opacity = "1";
    });

    function animateGlow() {

        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
}
