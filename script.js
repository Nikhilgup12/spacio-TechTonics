let currentIndex = 0;

function showSlide(index) {
    const carouselInner = document.querySelector(".carousel-inner");
    const totalSlides = document.querySelectorAll(".carousel-item").length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

const carouselInner = document.querySelector('.latest-carousel-inner');
const nextButton = document.getElementById('next');

let currentIndex1 = 0; 
const totalSlides = document.querySelectorAll('.latest-carousel-item').length;

nextButton.addEventListener('click', () => {
  currentIndex1++;
  if (currentIndex1 >= totalSlides) {
    currentIndex1 = 0; 
  }
  const offset = -currentIndex1 * 100; 
  carouselInner.style.transform = `translateX(${offset}%)`; 
});

const carouselInner1 = document.querySelector('.latest1');
const nextButton1 = document.getElementById('next1');

let currentIndex2 = 0; 
const totalSlides2 = document.querySelectorAll('.latest1-item').length;

nextButton1.addEventListener('click', () => {
  currentIndex2++;
  if (currentIndex2 >= totalSlides2) {
    currentIndex2 = 0;
  }
  const offset = -currentIndex2 * 100; 
  carouselInner1.style.transform = `translateX(${offset}%)`; 
});



const prevButton = document.getElementById("carousel-prev");
const nextButtons = document.getElementById("carousel-next");
const carouselTrack = document.querySelector(".carousel-track");

let currentSlide = 0;
const totalSlidess = document.querySelectorAll(".carousel-slide").length;
const slidesPerView = 3; 

function updateSlidePosition() {
  const trackWidth = carouselTrack.offsetWidth;
  const slideWidth = trackWidth / slidesPerView;
  carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide -= 1;
    updateSlidePosition();
  }
});

nextButtons.addEventListener("click", () => {
  if (currentSlide < totalSlidess - slidesPerView) {
    currentSlide += 1;
    updateSlidePosition();
  }
});

window.addEventListener("resize", updateSlidePosition); 
updateSlidePosition();
