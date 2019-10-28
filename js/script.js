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
    console.log(gridArr);
  }

//this is assigning everything a span that can match up to the board 0-9
// gridArr.forEach(function(el,i){
//     el.id = (board`${i}`);
//     console.log(gridArr[i]);

//     // newAttribute = document.createAttribute('boardIndex');
//     // newAttribute.value = `${board}`[i];
//     // el.setAttributeNode = newAttribute;
// });
// //then match each span to the board 0 - 0 - 0 in the init in some stored element representing currentboard



  

//listen to events on the container

function handleCellClick(evt){
    turn *= -1;
    let cellClicked = evt.target;
    //setting the color
    evt.target.textContent = playerColors[`${turn}`];
    var clickTurn = -1 * turn;
    cellClicked = (`${clickTurn}`);
    console.log(cellClicked);


    /// when someone clicks
    //and the cell hasn't been clicked yet
    //and we are still under the maxturns
    //then change the thing that is matching up to my currentboard element 
    ////forEach check if it is matching the winning conditions
    ///if it is, game over
}




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
