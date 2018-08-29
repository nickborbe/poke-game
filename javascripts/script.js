let theGame;
class Game{
    constructor(){
        this.player = new Player();
        this.playersInScreen = [];
        this.pokemonInScreen = [];
        this.ctx = document.getElementById('theCanvas').getContext('2d');
    }

    animate(){
        console.log('animatin')
        this.ctx.clearRect(0,0,1000,500);
        this.draw(this.player);




        window.requestAnimationFrame(this.animate)
    }

    draw(what){
        this.ctx.fillRect(what.x, what.y, what.width, what.height)
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

    move(direction){
        switch(direction){
            case 'ArrowLeft':
            this.x -=5;
            break;
            case 'ArrowRight':
            this.x +=5;
            break;
            case 'ArrowUp':
            this.y -=5;
            break;
            case 'ArrowDown':
            this.y +=5;
            break;
        }
    }
   

}




class Poke{
    constructor(){



     // get everything from db
     
     this.currentHP = this.hp;

    }
        
}


document.getElementById('start-game').onclick = ()=>{
    theGame = new Game();
    theGame.animate()


}

document.onkeydown = (e)=>{
    if(e.key === 'ArrowLeft'||e.key === 'ArrowRight'||e.key === 'ArrowUp'||e.key === 'ArrowDown'){
        e.preventDefault();
        theGame.player.move(e.key);
    }
    
}