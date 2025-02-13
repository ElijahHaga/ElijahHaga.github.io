const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
/*      else {
            entry.target.classList.remove('show');
        }
*/
    });
},  { threshold: 0.2 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    ["carousel-led-ring", "carousel-raspberry-pi-pico", "carousel-gameboy-color-cartridge", "carousel-this-page"].forEach(id => {
        new Splide(`#${id}`, {
            perPage: 2,
            breakpoints: { 640: { perPage: 1 } },
        }).mount();
    });
});
