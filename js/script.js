/*----- constants -----*/
const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const MAX_TURNS = 9;


/*----- app's state (variables) -----*/
let board, winner;
board = [
    0,0,0,
    0,0,0,
    0,0,0];
let players = [-1,1];
let turn = players[0];

/*----- cached element references -----*/


const reset = document.getElementById('reset').addEventListener('click', init);
const cell = document.querySelectorAll('section div');
const container = document.getElementsByTagName('section');
const winLoseHeader = document.getElementById('playerStatus');

/*----- event listeners -----*/


gridArr = [];
for (const i of cell) {
    i.addEventListener('click', handleCellClick);
    gridArr.push(i);
  }



//listen to events on the container
// let storeXO = [];
let turnCounter = 0;
  
function handleCellClick(evt){
    turnCounter +=1;
    console.log(turnCounter);
    
    if(turn===players[0]){
        turn = players[1];
        console.log(turn);
    }
    else {
        turn = players[0];
        console.log(turn);
        }
    let cellClicked = evt.target;
    //setting the textContent
    if (cellClicked.textContent === "-1" || cellClicked.textContent === "1"){
        return;
    }
    evt.target.textContent = [`${turn}`];
//styling
    if (turnCounter % 2){
        cellClicked.classList.add('styleOne');
    } 
    if (turnCounter % 2 === 0){
        cellClicked.classList.add('styleTwo');
    }
    board.splice(cellClicked.id,1,turn);
    checkForWin();
    if (winner === 1 || winner === -1){
        for (const i of cell) {
            i.removeEventListener('click', handleCellClick);
          };

    }

}

function checkForWin(){
    for(i=0; i<winning.length;i++){
        if (board[winning[i][0]] + board[winning[i][1]] + board[winning[i][2]] === 3 ){
            winner = turn;
            winLoseHeader.textContent = (`Player One wins in ${turnCounter} turns!`);
        }
        if (board[winning[i][0]] + board[winning[i][1]] + board[winning[i][2]] === -3 ){
            winner = turn;
            winLoseHeader.textContent = (`Player Two wins in ${turnCounter} turns!`);
        }
        if (turnCounter === MAX_TURNS) {
            winLoseHeader.textContent = (`It's a tie! Press the reset button and try again`);
        }

        }
    }
// }

/*----- functions -----*/

init(); 



function init(){
    console.log("board was reset!");
    turnCounter = 0;
    winLoseHeader.textContent = (`Let's begin!`);

    gridArr.forEach((box) => {
        box.textContent=''
        box.classList.remove('styleOne')
        box.classList.remove('styleTwo')
    });


    // gridArr.forEach((box) => box.classList.remove('styleOne'));
    // gridArr.forEach((box) => box.classList.remove('styleTwo'));
    turn = players[0];
    var winner = null;
}
