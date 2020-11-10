class Game {
    constructor(p1, p2, loser) {
        this.id = 'game';
        this.player1 = p1 || new Player('One');
        this.player2 = p2 || new Player('Two');
        this.playedMoves = [];
        this.currentPlayer = loser || this.player1;
    }

    newGame() {
        this.player1.moves = [];
        this.player2.moves = [];
        game = new Game(this.player1, this.player2, this.currentPlayer);
        showGame(game);
        clearBoard();
    }

    findWin(moves){
        var string = moves.sort();
        var sorted = string.toString();
        var winningArray = ['a,b,c', 'd,e,f', 'g,h,i', 'a,d,g', 'b,e,h', 'c,f,i', 'a,e,i', 'c,e,g', 'a,e,g,i', 'a,c,e,i'];
        for (var i = 0; i < winningArray.length; i++){
            if (sorted.includes(winningArray[i])){
                this.currentPlayer.wins.push(sorted)
                this.currentPlayer.saveWinsToStorage();
                showWin(this.currentPlayer.token)
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
        if (this.currentPlayer === this.player1) {
            this.currentPlayer = this.player2;
            return;
        }else if (this.currentPlayer === this.player2) {
            this.currentPlayer = this.player1;
            return;
        }
    }

    retrievePlayerWins(){
        if (localStorage){
            for (var i = 0; i < localStorage.length; i++){
                var key = localStorage.key(i);
                if(JSON.parse(key) === "One"){
                    this.player1.retrieveWinsFromStorage(key);
                }else if (JSON.parse(key) === "Two"){
                    this.player2.retrieveWinsFromStorage(key);
                }
            }
        }
    }

}