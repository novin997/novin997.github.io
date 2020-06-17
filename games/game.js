const boxs = document.querySelectorAll(".boardOutline");
const sock = io();
const chatList = document.querySelector(".chatlist");
const chatForm = document.querySelector(".chatform");
const chatInput = document.querySelector("#chatInput");
const name = prompt("Please enter your name to play the game?");
var player = null;

sock.on("chat-message",(data) => {
    addMessage(data);
    if(data.search(": start"))
        player = "cross";
        setupGame();
});

chatForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const message = chatInput.value;
    sock.emit("send-message",message);
    if(message == "start")
    {
        player = "circle";
        setupGame();
    }
    chatInput.value = "";
});

function addMessage(message){
    const messageElement = document.createElement("div");
    messageElement.innerText = name + ": " + message;
    messageElement.style.backgroundColor = "silver";
    chatList.appendChild(messageElement);
};

let board = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

let winConditions = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
let curr = "circle";
let boardCount = 0; 

function setupGame(){
    boxs.forEach((box,i)=>{
        // Reset all the initial board value to null and set the initial board for circle first
        board[i] = null;
        box.classList.remove("circle","cross","empty-cross");
        box.classList.add("empty-circle");
    });
    curr = "circle";
    boardCount = 0;
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
            }
        });
    }           
};

function checkWinCond()
{
    // check if anyone has won the tic tat toe
    winConditions.forEach((val,i)=>{
        if(board[val[0]]==board[val[1]] && board[val[1]]==board[val[2]] && board[val[0]]!=null) 
        {
            console.log("game has ended");
            setupGame();
        }
    });
};

boxs.forEach((box,index)=> {
    box.addEventListener("click",(e)=>{
        if(curr==player)
        {
            boardCount++;
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
            checkWinCond();
            if(boardCount == 9)
                setupGame(); 
        }
    });
});

setupGame();

