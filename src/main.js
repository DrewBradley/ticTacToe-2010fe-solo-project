// QUERY SELECTORS
var announcement = document.querySelector('.announcement');
var winCounter = document.querySelectorAll('.wins-counter');
var player1Box = document.querySelector('.player-section-one');
var player2Box = document.querySelector('.player-section-two');
var gameGrid = document.querySelector('.game-grid');
var squares = document.querySelectorAll('.square');

gameGrid.addEventListener('click', selectSquare);

var game = new Game(Date.now())
var player = 'player1';

function showGame(game) {
    var p1Moves = game.player1.moves;
    var p2Moves = game.player2.moves;
    showPlayerOne(p1Moves);
    showPlayerTwo(p2Moves);
    game.findWin(p1Moves, p2Moves);
    showWins(game);
    if (announcement.innerText === '❌ WINS!' || announcement.innerText === '⭕️ WINS!'){
        newGame(game.player1, game.player2);
    }
}

function newGame(p1, p2) {
    game = new Game(Date.now(), p1, p2);
}

function showPlayerOne(p1Moves){
    for(var i = 0; i < p1Moves.length; i++){
        squares.forEach(node => {
            if (node.id === p1Moves[i]){
                    node.innerText = '❌';
                }
        })
    }
}

function showPlayerTwo(p2Moves){
    for(var i = 0; i < p2Moves.length; i++){
        squares.forEach(node => {
            if (node.id === p2Moves[i]){
                    node.innerText = '⭕️';
                }
        })
    }
}

function showWins(){
    player1Box.children[1].innerText = `${game.player1.wins.length} WINS`;
    player2Box.children[1].innerText = `${game.player2.wins.length} WINS`;
}

function selectSquare(event){
    var square = event.target;
    if (square.classList.contains('square')){
        if (game.playedMoves.includes(square.id)){
            return;
        }
        game.playedMoves.push(square.id);
        if (player === 'player1'){
            game.player1.moves.push(square.id);

        }
        if (player === 'player2'){
            game.player2.moves.push(square.id);
        }
    }
    showGame(game);
    switchPlayer();
}

function switchPlayer() {
    if (player === 'player1') {
        player = 'player2';
        if (announcement.innerText !== '❌ WINS!')
        announcement.innerText="⭕️'s TURN!"
        return;
    }
    if (player == 'player2') {
        player = 'player1';
        if (announcement.innerText !== '⭕️ WINS!')
        announcement.innerText="❌'s TURN!"
        return;
    }
}