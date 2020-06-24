const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideShow = document.querySelectorAll(".slideshow-text");
var slideIndex = 0;

console.log(slideShow.length);

slideShow.forEach((text,index)=>{
    if(index == slideIndex)
    {
        text.classList.add("show");
    }
});

nextButton.addEventListener("click",() => {
    slideShow[slideIndex].classList.remove("show");
    slideIndex++;
    if(slideShow.length == slideIndex)
    {
        slideIndex = 0;
    }
    slideShow[slideIndex].classList.add("show");        
});

prevButton.addEventListener("click",() => {
    slideShow[slideIndex].classList.remove("show");
    slideIndex--;
    if(slideIndex == -1)
    {
        slideIndex = slideShow.length-1;
    }
    slideShow[slideIndex].classList.add("show");        
});