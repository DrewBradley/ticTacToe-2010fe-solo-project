class Game {
    constructor(p1, p2, loser) {
        this.id = 'game';
        this.player1 = p1 || new Player('One', '❌');
        this.player2 = p2 || new Player('Two', '⭕️');
        this.playedMoves = [];
        this.currentPlayer = loser || 'p1';
    }

    newGame() {
        this.player1.moves = [];
        this.player2.moves = [];
        game = new Game(this.player1, this.player2, this.currentPlayer);
        showGame(game);
        clearBoard();
    }

    findWin(p1Moves, p2Moves){
        var string1 = p1Moves.sort();
        var string2 = p2Moves.sort();
        var sorted1 = string1.toString();
        var sorted2 = string2.toString();
        var winningArray = ['a,b,c', 'd,e,f', 'g,h,i', 'a,d,g', 'b,e,h', 'c,f,i', 'a,e,i', 'c,e,g'];
        for (var i = 0; i < winningArray.length; i++){
            if (sorted1.includes(winningArray[i])){
                this.player1.winCount++;
                this.player1.wins.push(sorted1)
                this.player1.saveWinsToStorage();
                player1Win(this.player1.winCount);
                this.newGame(this.player1, this.player2);
            }else if (sorted2.includes(winningArray[i])){
                this.player2.winCount++;
                this.player2.wins.push(sorted2)
                this.player2.saveWinsToStorage();
                player2Win(this.player2.winCount);
                this.newGame(this.player1, this.player2);
            }else{
                this.findDraw();
            };
        }
    }
    findDraw() {
        var moves = this.playedMoves.sort().toString();
        if (moves === 'a,b,c,d,e,f,g,h,i'){
            declareDraw()
            this.newGame(this.player1, this.player2);
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