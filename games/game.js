const boxs = document.querySelectorAll(".boardOutline");

let board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];
let curr = "circle";

function setupGame(){
    boxs.forEach((box,i)=>{
        // Reset all the initial board value to null and set the initial board for circle first
        board[i] = null;
        box.classList.remove("circle","cross","empty-cross");
        box.classList.add("empty-circle");
    });
    curr = "circle";
};

function changeTurn()
{
    if(curr=="circle")
    {
        curr = "cross";
        boxs.forEach((box,index)=> {
            if(board[index]==null)
            {
                box.classList.remove("empty-circle");
                box.classList.add("empty-cross");
                console.log(box.classList);      
            }
        }); 
    }    
    else
    {
        curr = "circle";
        boxs.forEach((box,index)=> {
            if(board[index]==null)
            {
                box.classList.remove("empty-cross");
                box.classList.add("empty-circle");
                console.log(box.classList);      
            }
        });
    }           
};

boxs.forEach((box,index)=> {
    box.addEventListener("click",(e)=>{
        if(curr=="circle" && board[index]==null)
        {
            board[index]="circle";
            box.classList.remove("empty-circle");
            box.classList.add("circle");
        }
        else if(curr=="cross" && board[index]==null)
        {
            board[index]="cross";
            box.classList.remove("empty-cross");
            box.classList.add("cross");
        }
        changeTurn();        
    });
});

setupGame();