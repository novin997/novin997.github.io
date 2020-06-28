const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideShow = document.querySelectorAll(".slideshow-text");
var slideIndex = 0;

slideShow.forEach((text,index)=>{
    text.addEventListener("animationend",()=>{
        if(text.classList.contains("slide-out"))
        {
            text.classList.remove("slide-out");
            text.classList.remove("show");
            if(index + 1 == slideShow.length)
                index = -1;
            slideShow[index+1].classList.add("show");    
            slideShow[index+1].classList.add("slide-in");
        }
        else if(text.classList.contains("slide-in"))
        {
            text.classList.remove("slide-in");
        }     
    });
    
    if(index == slideIndex)
    {
        text.classList.add("show");
    }
});

nextButton.addEventListener("click",() => {
    
    slideShow[slideIndex].classList.add("slide-out");
    slideIndex++;
    if(slideIndex == slideShow.length)
        slideIndex = 0;

    console.log(slideIndex);

    // slideShow[slideIndex].classList.remove("show");
    // slideIndex++;
    // if(slideShow.length == slideIndex)
    // {
    //     slideIndex = 0;
    // }
    // slideShow[slideIndex].classList.add("show");        
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