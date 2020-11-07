class Game {
    constructor(id, p1, p2, loser) {
        this.id = id;
        this.player1 = p1 || new Player(Date.now(), '❌');
        this.player2 = p2 || new Player(Date.now(), '⭕️');
        this.playedMoves = [];
        this.currentPlayer = loser || 'p1';
    }

    newGame() {
        this.player1.moves = [];
        this.player2.moves = [];
        game = new Game(Date.now(), this.player1, this.player2, this.currentPlayer);
        showGame(game);
        clearBoard();
    }

    findWin(p1Moves, p2Moves){
        var string1 = p1Moves.sort();
        var string2 = p2Moves.sort();
        var sorted1 = string1.toString();
        var sorted2 = string2.toString();
        var winningArray = ['a1,a2,a3', 'b1,b2,b3', 'c1,c2,c3', 'a1,b1,c1', 'a2,b2,c2', 'a3,b3,c3', 'a1,b2,c3', 'a3,b2,c1', 'a1,b2,c1,c3', 'a3,a1,b2,c1'];
        for (var i = 0; i < winningArray.length; i++){
            if (sorted1.includes(winningArray[i])){
                player1Win();
                this.player1.wins.push(sorted1)
                this.newGame(this.player1, this.player2);
            }else if (sorted2.includes(winningArray[i])){
                player2Win();
                this.player2.wins.push(sorted2)
                this.newGame(this.player1, this.player2);
            };
        }
    }
    
    switchPlayer() {
        showTurn(this.currentPlayer);
        if (this.currentPlayer === 'p1') {
            this.currentPlayer = 'p2';
            return;
        }else if (this.currentPlayer === 'p2') {
            this.currentPlayer = 'p1';
            return;
        }
    }

}