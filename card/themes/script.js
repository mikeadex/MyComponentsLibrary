let currentSlide = 0;

const slides = document.querySelector('.slides');

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let autoSlide = setInterval(nextSlide, 3000);

const slider = document.querySelector('.slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});
slider.addEventListener('mouseleave', () => {
    autoSlide = setInterval(nextSlide, 3000);
});