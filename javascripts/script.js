let theGame;
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


document.getElementById('start-game').onclick = ()=>{
    console.log('starting')
    theGame = new Game();
    theGame.ctx = document.getElementById('theCanvas').getContext('2d');


}