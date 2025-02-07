// Preload audio for smooth playback
const audioMap = {};

document.querySelectorAll(".sound-btn").forEach((button) => {
    const soundUrl = button.dataset.sound;
    audioMap[soundUrl] = new Audio(soundUrl);

    // Play sound on hover only, not click
    button.addEventListener("mouseenter", () => {
        const audio = audioMap[soundUrl];
        audio.currentTime = 0;
        audio.play();
    });

    // Prevent sound on focus or click
    button.addEventListener("focus", (e) => e.preventDefault());
    button.addEventListener("click", (e) => e.preventDefault());
});


const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const dots = document.querySelectorAll(".dot");

let index = 0;
const totalSlides = document.querySelectorAll("#carousel > div").length;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("opacity-100"));
    dots[index].classList.add("opacity-100");
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        index = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

let autoSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
}, 3000);

// Pause auto-slide on hover
document.querySelector(".relative").addEventListener("mouseenter", () => clearInterval(autoSlide));
document.querySelector(".relative").addEventListener("mouseleave", () => {
    autoSlide = setInterval(() => {
        index = (index + 1) % totalSlides;
        updateCarousel();
    }, 3000);
});

updateCarousel(); // Initialize