const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideShow = document.querySelectorAll(".slideshow-text");
var slideIndex = 0;

slideShow[slideIndex].classList.add("show");

slideShow.forEach((text,index)=>{
    text.addEventListener("animationend",()=>{
        if(text.classList.contains("slide-out"))
        {
            text.classList.remove("slide-out");
            text.classList.remove("show");
            slideShow[slideIndex].classList.add("show");    
            slideShow[slideIndex].classList.add("slide-in");
        }
        else if(text.classList.contains("slide-in"))
        {
            text.classList.remove("slide-in");
        }
        else if(text.classList.contains("slide-out-right"))
        {
            text.classList.remove("slide-out-right");
            text.classList.remove("show");
            slideShow[slideIndex].classList.add("show");    
            slideShow[slideIndex].classList.add("slide-in-left");  
        }
        else if(text.classList.contains("slide-in-left"))
        {
            text.classList.remove("slide-in-left");
        }    
    });
});

nextButton.addEventListener("click",() => {
    
    slideShow[slideIndex].classList.add("slide-out");
    slideIndex++;
    if(slideIndex == slideShow.length)
        slideIndex = 0;     
});

prevButton.addEventListener("click",() => {
    slideShow[slideIndex].classList.add("slide-out-right");
    slideIndex--;
    if(slideIndex == -1)
        slideIndex = slideShow.length-1;
});