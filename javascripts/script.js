class Game{
    constructor(){
        player: new Player();
        this.playersInScreen = [];
        this.pokemonInScreen = [];
    }
}




class Player{
    constructor(){
        this.x = 100;
        this.y = 100;
        this.width = 30;
        this.height = 30;
        this.imgsrc=""
        this.pokemonOnDeck = [];
    }

}




class Poke{
    constructor(){



     // get everything from db
     
     this.currentHP = this.hp;

    }
        
}