let slideIndex = 0;

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusDivs(n) {
  showSlides(slideIndex += n);
}

// Initialize the slider
showSlides(slideIndex);