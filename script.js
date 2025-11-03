// Carousel script

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].classList.add("active");
}

next.addEventListener("click", () => showSlide(slideIndex + 1));
prev.addEventListener("click", () => showSlide(slideIndex - 1));

// auto slide every 5 seconds
setInterval(() => showSlide(slideIndex + 1), 5000);



