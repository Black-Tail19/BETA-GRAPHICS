const slidesContainer = document.querySelector(".slides")
const slides= document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")

let currentIndex = 0;
let intervalId = null;
const slideCount = slides.length;

function initializeSlider(){
    slides[currentIndex].display ="block";
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index){
    slides.forEach(slide=>{slide.display = "none";});
    if (index>=slideCount){
        currentIndex=0;
    } else if(index < 0) {
        currentIndex = slideCount -1;
    } else{
        currentIndex = index;
    }
    slides[currentIndex].display = "block";
}

function nextSlide(){
    showSlide(currentIndex + 1);
    resetInterval();
}

function prevSlide(){
    showSlide(currentIndex - 1);
    resetInterval();
}
function resetInterval(){
    clearInterval(intervalId);
    interval = setInterval(nextSlide,5000);
}

document.addEventListener("DOMContentLoaded",initializeSlider);