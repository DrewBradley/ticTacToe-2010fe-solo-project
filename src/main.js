// QUERY SELECTORS
var announcement = document.querySelector('.announcement');
var winCounter = document.querySelectorAll('.wins-counter');
var player1Box = document.querySelector('.player-section-one');
var player2Box = document.querySelector('.player-section-two');
var gameGrid = document.querySelector('.game-grid');
var squares = document.querySelectorAll('.square');

gameGrid.addEventListener('click', selectSquare);
window.addEventListener('load', pageLoad);

game = new Game();

function pageLoad() {
    if (localStorage){
        for (var i = 0; i < localStorage.length; i++){
            var key = localStorage.key(i);
            var oldWinCount = JSON.parse(localStorage.getItem(key));
            if(JSON.parse(key) === "One"){
                player1Box.children[1].innerText = `${oldWinCount} WINS`;
                game.player1.winCount = oldWinCount;
            }else if (JSON.parse(key) === "Two"){
                player2Box.children[1].innerText = `${oldWinCount} WINS`;
                game.player2.winCount = oldWinCount;
            }
        }
    }
}

function showGame(game) {
    var p1Moves = game.player1.moves;
    var p2Moves = game.player2.moves;
    showPlayerOne(p1Moves);
    showPlayerTwo(p2Moves);
    game.findWin(p1Moves, p2Moves);
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

function player1Win(p1Wins){
    announcement.innerText = "❌ WINS!"
    player1Box.children[1].innerText = `${p1Wins} WINS`;
}

function player2Win(p2Wins){
    announcement.innerText = "⭕️ WINS!"
    player2Box.children[1].innerText = `${p2Wins} WINS`;
}

function declareDraw(){
    announcement.innerText = "DRAW!"
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

function showTurn(player) {
    if (player === 'p1') {
        if (announcement.innerText !== "❌ WINS!")
        if (announcement.innerText !== "DRAW!")
        announcement.innerText="⭕️'s TURN!"
        return;
    }
    if (player == 'p2') {
        if (announcement.innerText !== '⭕️ WINS!')
        if (announcement.innerText !== "DRAW!")
        announcement.innerText="❌'s TURN!"
        return;
    }
}