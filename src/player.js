class Player {
    constructor(id, token, wins) {
        this.id = id;
        this.token = token;
        this.wins = wins || [];
    }
    saveWinsToStorage(){
        localStorage.setItem(this.id, (JSON.stringify(this)))
    }
    retrieveWinsFromStorage(){
        localStorage.getItem(this.id);
    }
}