// QUERY SELECTORS
var announcement = document.querySelector('.announcement');
var player1Box = document.querySelector('.player1');
var player2Box = document.querySelector('.player2');
var gameGrid = document.querySelector('.game-grid');
var squares = document.querySelectorAll('.square');
var startButton = document.querySelector('.start-button')
var startScreen = document.querySelector('.start-game');
var player1Token = document.querySelector('#p1-token');
var player2Token = document.querySelector('#p2-token');
var player1Title = document.querySelector('#p1-title');
var player2Title = document.querySelector('#p2-title')

var game = new Game();

gameGrid.addEventListener('click', selectSquare);
window.addEventListener('load', pageLoad);
startButton.addEventListener('click', choosePlayers);

function pageLoad() {
    game.retrievePlayerWins();
    updateScore();
}  

function choosePlayers() {
    if (player1Token.value !== player2Token.value){
        game.player1.token = player1Token.value;
        game.player2.token = player2Token.value;
        showPlayers();
        showTurn();
    }else{
        alert("Players cannot be the same!")
    };
};

function showPlayers(){
    startScreen.classList.add("hidden");
    gameGrid.classList.remove("hidden");
    player1Title.innerHTML = `<img src="assets/${game.player1.token}.png">`;
    player2Title.innerHTML = `<img src="assets/${game.player2.token}.png">`;
};

function showGame(game) {
    showPlayed(game.currentPlayer);
    game.findWin(game.currentPlayer.moves);
};

function selectSquare(event){
    var square = event.target;
    if (square.classList.contains("square")){
        if (game.playedMoves.includes(square.id)){
            return;
        };
        game.playedMoves.push(square.id);
        game.currentPlayer.moves.push(square.id);
    };
    showGame(game);
    game.switchPlayer();
    showTurn();
};

function showWin(token){
    announcement.innerText = `${token} WINS!`
    updateScore();
};

function updateScore(){
    player1Box.children[1].innerText = `${game.player1.wins.length} WINS`;
    player2Box.children[1].innerText = `${game.player2.wins.length} WINS`;
}

function declareDraw(){
    announcement.innerText = "DRAW!";
};

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function clearBoard(){
    disableSquares();
    await timeout(1000);
    enableSquares();
    squares.forEach(node => {
        node.innerText = '';
    })
    announcement.innerText = `${game.currentPlayer.token}'s TURN!`   
};

function disableSquares(){
    squares.forEach(node => {
        node.disabled = true;
    })
};

function enableSquares(){
    squares.forEach(node => {
        node.disabled = false;
    })
};

function showPlayed(player){
    for(var i = 0; i < player.moves.length; i++){
        squares.forEach(node => {
            if (node.id === player.moves[i]){
                node.innerHTML = `<img src="assets/${player.token}.png">`;
            };
        })
    };
};

function showTurn() {
    if (announcement.innerText.includes("WINS!")){
        return 
    };
    if (announcement.innerText.includes("DRAW!")){
        return
    };
    announcement.innerText=`${game.currentPlayer.token}'s TURN!`
        return;
};