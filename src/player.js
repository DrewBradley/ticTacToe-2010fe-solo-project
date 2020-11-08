class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = moves || [];
        this.wins = wins || [];
    }
    saveWinsToStorage(){
        localStorage.setItem(JSON.stringify(this.id), (JSON.stringify(this.wins)))
    }
    retrieveWinsFromStorage(){
        var retrievedWins = localStorage.getItem(JSON.stringify(this.id))
        return JSON.parse(retrievedWins);
    }
}