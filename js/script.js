document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function nextSlide() {
      currentIndex = 1 - currentIndex; // Alternar entre 0 e 1
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos
    showSlide(currentIndex); // Exibe o primeiro slide
  });