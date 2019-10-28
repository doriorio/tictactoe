console.log('connected');


/*----- constants -----*/ 
// const MAX_TURN = 5;
// const WIN_COUNT = 3;


const colors = {
    null: 'white',
    '1': "red",
    '-1': "blue",
};

const winningCombos = [
    // {c0r0, c0r1, c0r2
    [1,2,3],
    // {c1r0, c1r1, c1r2}
    [4,5,6],
    // {c2r0, c2r1, c2r2}
    [7,8,9],
    // c0r0, c1r0, c2r0
    [1,4,7],
    // c0r1, c1r1, c2r1
    [2,5,8],
// c0r2, c1r2, c2r2
    [3,6,9],
    // c0r0, c1r1, c2r2
    [1,5,9],
// c0r2, c1r1, c2r0
    [3,5,7]
];


// const winner = 
//if the current board value is === any of the arrays in winning, that's a win
//if turns = 9 and the current board value doesn't ==== any of the arrays in winning, that's a tie
//if turns are less than 9 and the current board value doesn't ==== any of the arrays in winning, that's a game still in progress



/*----- app's state (variables) -----*/ 
let turn, board, players;


/*----- cached element references -----*/ 
const reset = document.getElementById('reset');
const cell = document.querySelectorAll('section div');
//all of the cells get pushed into here
const gridArr = [];


/*----- event listeners -----*/ 
//listen to replay button events
reset.addEventListener('click', init);

//listen to events on the container
for (const i of cell) {
  i.addEventListener('click', handleGridClick);
  gridArr.push(i);
  console.log(gridArr);
}


/*----- functions -----*/
init();

function handleGridClick(evt){
    turn *= -1;
    let clickedCell = evt.target;
    console.dir(evt.target);
    clickedCell.style.backgroundColor = colors[`${turn}`];

    gridArr.forEach(function(el, i){
        if (clickedCell.textContent === gridArr[i].textContent){
          console.log("hi");  
        }
    })
}
        


function render(){
    board.forEach(function(e,i){
        gridArr.forEach(function(e,i){
            gridArr[i].textContent = board[i];
        })
        return gridArr
    })

}



function init(){
     players = {
        '1': {
            score: 0
        },
        '-1': {
            score: 0
        }
    };
    board = [
        0,0,0,
        0,0,0,
        0,0,0
    ]

    turn = 1;
    winner = null;
    render();
};

