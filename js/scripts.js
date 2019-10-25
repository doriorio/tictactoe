console.log('connected');


/*----- constants -----*/ 
const MAX_TURN = 5;
const WIN_COUNT = 3;

// const player = {
//     '1': "red",
//     '-1': 'blue'
// }

const colors = {
    null: 'white',
    '1': "red",
    '-1': "blue",
};

// const winning = {
    //
//     {c0r0, c0r1, c0r2
//     [1,1,1],
//     [0,0,0],
//     [0,0,0]
//
//     },
//     {
    // {c1r0, c1r1, c1r2}
//     [0,0,0],
//     [1,1,1],
//     [0,0,0]
//     },
//     {
    // {c2r0, c2r1, c2r2}
//     [0,0,0],
//     [0,0,0],
//     [1,1,1]
//     },
//     {
    // c0r0, c1r0, c2r0
//     [1,0,0],
//     [1,0,0],
//     [1,0,0]
//     },
//     {
    // c0r1, c1r1, c2r1
//     [0,1,0],
//     [0,1,0],
//     [0,1,0]
//     },
//     {
// c0r2, c1r2, c2r2
//     [0,0,1],
//     [0,0,1],
//     [0,0,1]
//     },
//     {
    //c0r0, c1r1, c2r2
//     [1,0,0],
//     [0,1,0],
//     [0,0,1]
//     },
//     {
// c0r2, c1r1, c2r0
//     [0,0,1],
//     [0,1,0],
//     [1,0,0]
//     },

// }


/*----- app's state (variables) -----*/ 
let turn, winner, board, players;

/*----- cached element references -----*/ 
const cell = document.querySelectorAll('section div');
const reset = document.getElementById('reset');



/*----- event listeners -----*/ 
//listen to replay button events
reset.addEventListener('click', init);

//listen to events on the container
cell.addEventListener('click', handleGridClick);


/*----- functions -----*/
init();

function handleGridClick(evt){
    turn *= -1;
    let clickedCell = evt.target;
    console.dir(evt.target);
    console.log(turn);
    // if (cell.includes(clickedCell)){
    //     console.log("wt");
    // }
    // console.log(clickedCell)
    // (evt.target).addClass('xPlayer');
    clickedCell.style.backgroundColor = colors[`${turn}`];
}

function render(){
    //attach board to each div 
    // let gridBoard = [];
    // gridBoard.forEach*()
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
        [0,0,0],
        [0,0,0],
        [0,0,0],
    ]

    turn = 1;
};

console.log(board)