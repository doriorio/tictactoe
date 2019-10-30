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


const reset = document.getElementById('reset');
const cell = document.querySelectorAll('section div');

/*----- event listeners -----*/

reset.addEventListener('click', init);

gridArr = [];
for (const i of cell) {
    i.addEventListener('click', handleCellClick);
    gridArr.push(i);
  }

  

//listen to events on the container
// let storeXO = [];

  
function handleCellClick(evt){
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
    board.splice(cellClicked.id,1,turn);
    console.log(board);
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
            console.log("hi");
        }
        if (board[winning[i][0]] + board[winning[i][1]] + board[winning[i][2]] === -3 ){
            winner = turn;
            console.log("hello");
        }
    }
}

/*----- functions -----*/

init(); 


function render(){

    console.log("hi");    
}


function init(){
    turn = players[0];
    var winner = null;
    render();
}
