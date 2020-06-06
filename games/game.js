const TicTatToe = document.querySelector(".gameboard");

function setupGame(){
    let board = [
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ];
};

TicTatToe.childNodes.forEach((box)=> {
    box.addEventListener("click",(e)=>{
        console.log("test");   
    });
});