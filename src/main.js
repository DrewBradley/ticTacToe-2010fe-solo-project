// QUERY SELECTORS
var announcement = document.querySelector('.announcement');
var winCounter = document.querySelectorAll('.wins-counter');
var player1Box = document.querySelector('.player-section-one');
var player2Box = document.querySelector('.player-section-two');
var gameGrid = document.querySelector('.game-grid');
var squares = document.querySelectorAll('.square');

gameGrid.addEventListener('click', selectSquare);

var game = new Game(Date.now())

function showGame(game) {
    var p1Moves = game.player1.moves;
    var p2Moves = game.player2.moves;
    showPlayerOne(p1Moves);
    showPlayerTwo(p2Moves);
    game.findWin(p1Moves, p2Moves);
    showWins(game);
}

function player1Win(){
    announcement.innerText = '❌ WINS!'
}

function player2Win(){
    announcement.innerText = '⭕️ WINS!'
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function clearBoard(){
    disableSquares();
    await timeout(1000);
    enableSquares();
    squares.forEach(node => {
        node.innerText = '';
    })
    if(game.currentPlayer === 'p1'){
        announcement.innerText = "❌'s TURN!"
    }else{
        announcement.innerText = "⭕️'s TURN!"
    }    
}

function disableSquares(){
    squares.forEach(node => {
        node.disabled = true;
    })
}

function enableSquares(){
    squares.forEach(node => {
        node.disabled = false;
    })
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

function showWins(game){
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
        if (game.currentPlayer === 'p1'){
            game.player1.moves.push(square.id);

        }
        if (game.currentPlayer === 'p2'){
            game.player2.moves.push(square.id);
        }
    }
    showGame(game);
    game.switchPlayer();
}

function showTurn(player) {
    if (player === 'p1') {
        if (announcement.innerText !== '❌ WINS!')
        announcement.innerText="⭕️'s TURN!"
        return;
    }
    if (player == 'p2') {
        if (announcement.innerText !== '⭕️ WINS!')
        announcement.innerText="❌'s TURN!"
        return;
    }
}