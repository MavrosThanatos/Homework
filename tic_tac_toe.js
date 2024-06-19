let board=document.querySelectorAll(".cell")

let player1="X";
let player2='O';
let currentPlayer=player1;

let statusText=document.querySelector("#status");

let open=['','','','','','','','',''];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let running=false;
initializeGame();
//initializeGame
function initializeGame() {
    board.forEach(cell => cell.addEventListener("click",cellClicked));
    statusText.textContent = `${currentPlayer}'S TURN`;
    running=true;
}
//cellClicked
function cellClicked() {
    const cellIndex= this.getAttribute("id");
    if (open[cellIndex]!= '' || !running) {
        return;
    }
    update(this,cellIndex);        
    checkWinner();
}
//update
function update(cell,index) {
    open[index]=currentPlayer;
    cell.textContent=currentPlayer;
}
function changePlayer() 
{
    currentPlayer=(currentPlayer ==player1)? player2:player1;
    statusText.textContent = `${currentPlayer}'S TURN`;
}
//checkWinner
function checkWinner() 
{
    let end=false;
    for (let i = 0; i < winConditions.length; i++) {
        const condition=winConditions[i];
        const cell0 = open[condition[0]];
        const cell1 = open[condition[1]];
        const cell2 = open[condition[2]];
        
        if(cell0 == "" || cell1 == "" || cell2 == "")
        {
            continue;
        }
        if(cell0 == cell1 && cell1 == cell2)
        {
            end = true;
            break;
        }
    }
    if(end)
    {
        statusText.textContent = `${currentPlayer} WINS!`;
        running = false;
    }
    else if(!open.includes(""))
    {
        statusText.textContent = `TIE!`;
        running = false;
    }
    else
    {
        changePlayer();
    }     
}
//restart
function reset() {
    // console.log("!");
    currentPlayer=player1;
    open=['','','','','','','','',''];
    statusText.textContent = `${currentPlayer}'S TURN`;
    board.forEach(cell => cell.textContent = "");
    running = true;
}
