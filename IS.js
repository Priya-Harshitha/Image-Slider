const slides = document.querySelectorAll('.pics img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initial);
function initial(){
    if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(ns,5000);
    }
}
function show(index){
if(index >= slides.length){
    slideIndex = 0;
}
else if(index < 0){
    slideIndex = slides.length-1;
}
  slides.forEach(slide =>{
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}
function ps(){
 clearInterval(intervalId);
 slideIndex--;
 show(slideIndex);
}
function ns(){
 slideIndex++;
 show(slideIndex);
}