const testimonial1 = document.querySelector(".testimonial1");
const testimonial2 = document.querySelector(".testimonial2");
const nextSlide1 = document.querySelector(".nextSlide1");
const nextSlide2 = document.querySelector(".nextSlide2");

nextSlide1.addEventListener('click', () => {
 
  if (testimonial2.style.display="block") {
      testimonial2.style.display="none";
      testimonial1.style.display="block";
  } 
  
  else if (testimonial.style.display="block") {
    testimonial2.style.display = "none";
    testimonial2.style.display = "block";

  }



})

nextSlide2.addEventListener('click', () => {
 
  if (testimonial1.style.display="block") {
      testimonial1.style.display="none";
      testimonial2.style.display="block";
  } else  {
    testimonial2.style.display = "none";
    testimonial1.style.display = "block";

  }



})



// ADDING AN ACTIVE CLASS SHOULD SOLVE THIS PROBLEM
