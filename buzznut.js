//nav//
// JavaScript for dropdown menu
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});





//carousel//
const portfolioImages = document.querySelectorAll(".portfolio img");
const carouselLightbox = document.getElementById("carousel-lightbox");
const carouselImage = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const closeCarousel = document.getElementById("close-carousel");

let currentIndex = 0;

portfolioImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        carouselImage.src = img.src;
        carouselImage.alt = img.alt; // Ensures accessibility
        carouselLightbox.style.display = "flex"; // Display the lightbox
    });
});

// Close carousel
closeCarousel.addEventListener("click", () => {
    carouselLightbox.style.display = "none";
});

// Show next image
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % portfolioImages.length;
    carouselImage.src = portfolioImages[currentIndex].src;
});

// Show previous image
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
    carouselImage.src = portfolioImages[currentIndex].src;
});
