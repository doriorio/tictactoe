/*----- constants -----*/
const winning = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

const MAX_TURNS = 9;



const playerColors = {
    null: 'white',
    '1': "X",
    '-1': "O",
};


/*----- app's state (variables) -----*/
let turn, board, players;
board = [
    0,0,0,
    0,0,0,
    0,0,0];



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
let storeXO = [];

function checkForMatch(){
    var allX = [];
    var allO = [];

    storeXO.forEach(function(el){
    if (el.charAt(4) === "X"){
        var x = el.charAt(1);
        allX.push(x);
    } else if (el[4] === "O"){
        allO.push(parseInt(el.charAt(1)),el.char);
        console.log(allO)
        return allO;
    }
    })
    
}
//sort the array, then sort the allX or allO and if allO matches 
//- O .. vis versa




  
function handleCellClick(evt){
    turn *= -1;
    let cellClicked = evt.target;
    //setting the textContent
    if (cellClicked.textContent === "X" || cellClicked.textContent === "O"){
        return;
    }
    evt.target.textContent = playerColors[`${turn}`];
    storeXO.push(`{${cellClicked.id}: ${cellClicked.textContent}}`);

}

//every odd value is the X or O
//every even value is the index



/*----- functions -----*/

init(); 


function render(){

    console.log("hi");    
}


function init(){
    turn = 1;
    var winner = null;
    players = {
        '1': {
            score: 0
        },
        '-1': {
            score: 0
        }
    },
    render();
}
