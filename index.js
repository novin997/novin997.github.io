const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");
const slideShow = document.querySelectorAll(".slideshow-text");
const navItems = document.querySelectorAll(".dropdownContents a");
const menuIcon = document.querySelector(".fa-bars");

const github = document.querySelector(".fa-github");
const google = document.querySelector(".fa-google");
const linkedin = document.querySelector(".fa-linkedin");

const requestTranscript = document.querySelector("#requestTranscript");

var slideIndex = 0;
var isAnimationOn = false;

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
            isAnimationOn = false;
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
            isAnimationOn = false;
        }    
    });
});

nextButton.addEventListener("click",() => {
    if(!isAnimationOn)
    {
        slideShow[slideIndex].classList.add("slide-out");
        slideIndex++;
        if(slideIndex == slideShow.length)
            slideIndex = 0;
        isAnimationOn = true;  
    } 
});

prevButton.addEventListener("click",() => {
    if(!isAnimationOn)
    {
        slideShow[slideIndex].classList.add("slide-out-right");
        slideIndex--;
        if(slideIndex == -1)
            slideIndex = slideShow.length-1;
        isAnimationOn = true;   
    }
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

requestTranscript.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href = "/download";
    // fetch("/download",
    // {
    //     method: "get"
    // })
    // .then(response => {
    //     response.blob()
    // })
    // .then(blob =>{
    //     var blobURL = URL.createObjectURL(blob);
    //     window.location.replace(blobURL);
    // })
    // .catch((error)=>
    // {
    //     console.log(error);
    // })
});