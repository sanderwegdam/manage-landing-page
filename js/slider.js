document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".dots");
  const slideCount = slides.length;
  let slideIndex = 0;
  let slidesPerView = 1; // Standaard weergave van 1 slide
  let slideInterval;

  function showSlides() {
    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    for (let i = slideIndex; i < slideIndex + slidesPerView; i++) {
      const currentSlide = slides[i % slideCount];
      if (currentSlide) {
        currentSlide.style.display = "block";
      }
    }

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
      if (index === slideIndex) {
        dot.classList.add("active");
      }
    });
  }

  function showSlide(index) {
    slideIndex = index;
    showSlides();
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    showSlides();
  }

  // Laat de eerste set van slides zien bij het laden van de pagina
  showSlides();

  // Voeg dots toe op basis van het totale aantal slides
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.slideIndex = i;
    dot.addEventListener("click", (event) => {
      const clickedSlideIndex = parseInt(event.target.dataset.slideIndex);
      showSlide(clickedSlideIndex);
    });
    dotsContainer.appendChild(dot);
  }

  // Functie om het aantal slides per view te bepalen op basis van de schermgrootte
 function setSlidesPerView() {
  if (window.matchMedia('(min-width: 1441px) and (max-width: 1920px)').matches) {
    slidesPerView = 3; // Toon 3 slides bij een schermgrootte tussen 1440px en 1920px
  } else if (window.matchMedia('(min-width: 992px) and (max-width: 1440px)').matches) {
    slidesPerView = 2; // Toon 2 slides bij een schermgrootte tussen 992px en 1440px
  } else {
    slidesPerView = 1; // Terug naar 1 slide voor andere schermgroottes
  }
  showSlides(); // Toon de slides opnieuw op basis van het gewijzigde aantal slides per view
}

  // Voer de functie uit bij het laden van de pagina en bij veranderingen in de schermgrootte
  setSlidesPerView();
  window.addEventListener('resize', setSlidesPerView);

  // Start het automatisch doorlopen van de slides met een langzamere intervaltijd van 5 seconden
  slideInterval = setInterval(nextSlide, 2000);

  // Pauzeer het automatisch doorlopen wanneer de muis over de slider gaat
  document.querySelector(".slider-container").addEventListener("mouseover", function() {
    clearInterval(slideInterval);
  });

  // Hervat het automatisch doorlopen wanneer de muis de slider verlaat
  document.querySelector(".slider-container").addEventListener("mouseout", function() {
    slideInterval = setInterval(nextSlide, 2000);
  });
});
