const boxs = document.querySelectorAll(".boardOutline");
const sock = io();
const chatList = document.querySelector(".chatlist");
const chatForm = document.querySelector(".chatform");
const chatInput = document.querySelector("#chatInput");
const gameInfo = document.querySelector(".gameinfo");
const name = prompt("Please enter your name to play the game?");

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

var player = null;
var enemyName = null;
let curr = "circle";
let boardCount = 0;

sock.on("name-broadcast",(message) => {
    enemyName = message;
    console.log(enemyName);
    sock.emit("reply-name",name)
});

sock.on("reply-name-broadcast",(message) => {
    enemyName = message;
    console.log(enemyName);
});

sock.on("chat-message",(data) => {
    addMessage(data);
    if(data.includes("start"))
    {
        console.log("test");
        addMessage(`${enemyName} has started a game of Tic Tat Toe`);
        player = "cross";
        setupGame(player);
        gameInfo.innerHTML = `You are ${player}. It is ${enemyName} turn.`;
    }     
});

sock.on("move-message",(index) => {
    boardCount++;
    console.log(boxs[index]);
    if(curr=="circle")
    {
        board[index]="circle";
        boxs[index].classList.remove("empty-circle","empty-cross");
        boxs[index].classList.add("circle");
    }
    else
    {
        board[index]="cross";
        boxs[index].classList.remove("empty-circle","empty-cross");
        boxs[index].classList.add("cross");
    }
    changeTurn();
    checkWinCond();
    if(boardCount == 9)
        console.log("The result of the game is a draw");
});

chatForm.addEventListener("submit",(e) => {
    e.preventDefault();
    const message = chatInput.value;
    if(message == "start")
    {
        sock.emit("name-message",name);
        player = "circle";
        setupGame(player);
        gameInfo.innerHTML = `You are ${player}. It is your turn.`;
    }
    sock.emit("send-message",message);
    chatInput.value = "";
});

function addMessage(message){
    const messageElement = document.createElement("div");
    messageElement.innerText = name + ": " + message;
    messageElement.style.backgroundColor = "silver";
    chatList.appendChild(messageElement);
};

function setupGame(state){
    boxs.forEach((box,i)=>{
        // Reset all the initial board value to null and set the initial board for circle first
        board[i] = null;
        box.classList.remove("circle","cross","empty-cross","empty-circle");
        if (state=="circle")
            box.classList.add("empty-circle");
        else
            box.classList.add("empty-cross");
    });
    curr = "circle";
    boardCount = 0;
};

function emptyBoard()
{
    boxs.forEach((box,i)=>{
        // Reset all the initial board value to null and set the initial board for circle first
        board[i] = null;
        box.classList.remove("circle","cross","empty-cross","empty-circle");
    }); 
};

function changeTurn()
{   
    if(curr=="circle")
    {
        curr = "cross";
        if(player == "cross")
            gameInfo.innerHTML = `You are ${player}. It is your turn.`;
        else
            gameInfo.innerHTML = `You are ${player}. It is ${enemyName} turn.`;
    }
    else
    {
        curr = "circle";
        if(player == "circle")
            gameInfo.innerHTML = `You are ${player}. It is your turn.`;
        else
            gameInfo.innerHTML = `You are ${player}. It is ${enemyName} turn.`; 
    }               
};

function checkWinCond()
{
    // check if anyone has won the tic tat toe
    winConditions.forEach((val,i)=>{
        if(board[val[0]]==board[val[1]] && board[val[1]]==board[val[2]] && board[val[0]]!=null) 
        {
            if(player==curr)
            {
                console.log("test");
                gameInfo.innerHTML = `${enemyName} win. Please type <u>start</u> in the chat to play again.`;
            }
            else
            {
                console.log("test");
                gameInfo.innerHTML = `You win. Please type <u>start</u> in the chat to play again.`;                    
            }
            console.log("Game has ended");
            emptyBoard();
        }
    });
};

boxs.forEach((box,index)=> {
    box.addEventListener("click",(e)=>{
        if(curr==player)
        {
            var message = null;
            boardCount++;
            if(curr=="circle" && board[index]==null)
            {
                board[index]="circle";
                box.classList.remove("empty-circle");
                box.classList.add("circle");
                message = index;
            }
            else if(curr=="cross" && board[index]==null)
            {
                board[index]="cross";
                box.classList.remove("empty-cross");
                box.classList.add("cross");
                message = index;
            }
            sock.emit("player-move",message);
            changeTurn(); 
            checkWinCond();
            if(boardCount == 9)
                emptyBoard();
                console.log("The result of the game is a draw"); 
        }
    });
});

setupGame();

