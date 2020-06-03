const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener('input',(e) => {
    let searchString = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    
    //For each card
    cards.forEach((item)=>{
        //Get the card header selector
        const cardHeader = item.childNodes[1];
        const cardTag = item.querySelectorAll(".badge");
        if(cardHeader.innerHTML.toLowerCase().indexOf(searchString)!= -1)
        {
            item.parentNode.style.display = "";
        }
        else
        {
            item.parentNode.style.display = "none";
        }
        
        //Loop through each tag in the GPU
        cardTag.forEach((tag) => {
            if(tag.innerHTML.toLowerCase().indexOf(searchString)!= -1 && item.parentNode.style.display == "none")
                item.parentNode.style.display = "";             
        })
    });
});