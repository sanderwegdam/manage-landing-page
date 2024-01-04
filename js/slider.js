document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  let slideIndex = 0;

  // Create dots based on the number of slides
  slides.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => showSlide(index));
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll(".dot");
  showSlide(slideIndex);

  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));
    slides[index].classList.add("active");
    dots[index].classList.add("active");
    slideIndex = index;
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

//   setInterval(nextSlide, 3000);
  // Change slide every 3 seconds (3000 milliseconds)
});