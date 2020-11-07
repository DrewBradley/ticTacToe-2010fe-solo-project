class Player {
    constructor(id, token, moves, wins) {
        this.id = id;
        this.token = token;
        this.moves = [];
        this.wins = [];
    }
    saveWinsToStorage(){
        localStorage.setItem(this.id, (JSON.stringify(this)))
    }
    retrieveWinsFromStorage(){
        localStorage.getItem(this.id);
    }
}