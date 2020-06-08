const boxs = document.querySelectorAll(".boardOutline");

let board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function setupGame(){
    boxs.forEach((box,i)=>{
        // Reset all the initial board value to null and set the initial board for circle first
        board[i] = null;
        console.log(board[i]); 
        box.classList.remove("circle","cross","empty-cross");
        box.classList.add("empty-circle");
        console.log(box.classList);
    });
};

boxs.forEach((box)=> {
    box.addEventListener("click",(e)=>{
        console.log("test");   
    });
});

setupGame();