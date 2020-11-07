class Game {
    constructor(id, p1, p2) {
        this.id = id;
        this.player1 = p1 || new Player(Date.now(), '❌');
        this.player2 = p2 || new Player(Date.now(), '⭕️');
        this.playedMoves = [];
    }

    // newGame(game) {
    //     game = new Game(Date.now(), game.player1, game.player2)
    // }

    findWin(p1Moves, p2Moves){
        var string1 = p1Moves.sort();
        var string2 = p2Moves.sort();
        var sorted1 = string1.toString();
        var sorted2 = string2.toString();
        var winningArray = ['a1,a2,a3', 'b1,b2,b3', 'c1,c2,c3', 'a1,b1,c1', 'a2,b2,c2', 'a3,b3,c3', 'a1,b2,c3', 'a3,b2,c1'];
        for (var i = 0; i < winningArray.length; i++){
            if (sorted1.includes(winningArray[i])){
                announcement.innerText = '❌ WINS!'
                this.player1.wins.push(sorted1)
            }else if (sorted2.includes(winningArray[i])){
                announcement.innerText = '⭕️ WINS!'
                this.player1.wins.push(sorted1)
            }
        }
    }

}