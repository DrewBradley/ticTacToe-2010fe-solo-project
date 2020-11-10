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
    retrieveWinsFromStorage(key){
        var retrievedWins = localStorage.getItem(key)
        return JSON.parse(retrievedWins);
    }
}