class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
        this.winCount = 0;
    }
    saveWinsToStorage(){
        localStorage.setItem(JSON.stringify(this.id), (JSON.stringify(this.winCount)))
    }
    retrieveWinsFromStorage(){
        var retrievedWinCount = localStorage.getItem(JSON.stringify(this.id))
        return JSON.parse(retrievedWinCount);
    }
}