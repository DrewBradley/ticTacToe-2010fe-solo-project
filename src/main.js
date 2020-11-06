// QUERY SELECTORS
var announcement = document.querySelector('.announcement');
var winCounter = document.querySelectorAll('.wins-counter');
var gameGrid = document.querySelector('.game-grid');
var squares = document.querySelectorAll('.square');

gameGrid.addEventListener('click', selectSquare);

var player1arr = [];
var player2arr = [];
var gameArray = [];
var player = 'player1';

function showGame() {
    showPlayerOne();
    showPlayerTwo();

}

function showPlayerOne(){
    for(var i = 0; i < player1arr.length; i++){
        squares.forEach(node => {
            if (node.id === player1arr[i]){
                    node.innerText = '❌';
                }
        })
    }
}

function showPlayerTwo(){
    for(var i = 0; i < player2arr.length; i++){
        squares.forEach(node => {
            if (node.id === player2arr[i]){
                    node.innerText = '⭕️';
                }
        })
    }
}

function selectSquare(event){
    var square = event.target;
    if (square.classList.contains('square')){
        if (gameArray.includes(square.id)){
            return;
        }
        gameArray.push(square.id);
        if (player === 'player1'){
            player1arr.push(square.id);
        }
        if (player === 'player2'){
            player2arr.push(square.id);
        }
    }
    showGame();
    switchPlayer();
}

function switchPlayer() {
    if (player === 'player1') {
        player = 'player2';
        return;
    }
    if (player == 'player2') {
        player = 'player1';
        return;
    }
}