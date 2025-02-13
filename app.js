document.addEventListener("DOMContentLoaded", function () {
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

    ["carousel-led-ring", "carousel-raspberry-pi-pico", "carousel-gameboy-color-cartridge", "carousel-this-page"].forEach(id => {
        new Splide(`#${id}`, {
            perPage: 2,
            breakpoints: { 640: { perPage: 1 } },
        }).mount();
    });

    document.getElementById("toggleButton").addEventListener("click", function () {
        toggleIframe();
    });
});


function toggleIframe() { /* The function to toggle the Li-ion battery paper */
    const iframeContainer = document.getElementById("iframeContainer");
    const button = document.getElementById("toggleButton");

    if (iframeContainer.style.display === "none") { /* If the paper is out, the button will hide it */
        iframeContainer.style.display = "block";
        button.innerText = "Hide Paper";
    } else {
        iframeContainer.style.display = "none"; /* Otherwise, the button will show the paper */
        button.innerText = "View Paper";
    }
}
