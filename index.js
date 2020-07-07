const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideShow = document.querySelectorAll(".slideshow-text");
const navItems = document.querySelectorAll(".dropdownContents a");
const menuIcon = document.querySelector(".fa-bars");

const github = document.querySelector(".fa-github");
const google = document.querySelector(".fa-google");
const linkedin = document.querySelector(".fa-linkedin");

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

menuIcon.addEventListener("click",()=>{
    // navBar.childNodes.forEach((navItem)=>{
    //     console.log(navItem.classList);
    // });
    navItems.forEach((item)=>
    {
        console.log(item);
        if(item.classList.contains("show")){
            item.classList.remove("show");
            item.classList.add("notShow");
        }    
        else{
            item.classList.remove("notShow");
            item.classList.add("show");
        }
            
    });
});