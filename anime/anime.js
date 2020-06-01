const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener('input',(e) => {
    let searchString = e.target.value.toLowerCase();
    const cards = document.querySelectorAll(".card-header");
    
    cards.forEach((item)=>{
        console.log(item);
        if(item.innerHTML.toLowerCase().indexOf(searchString)!= -1)
        {
            item.parentNode.parentNode.style.display = "";
        }
        else
        {
            item.parentNode.parentNode.style.display = "none";
        }
    });
});