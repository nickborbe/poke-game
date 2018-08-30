let theGame;
class Game{
    constructor(){
        this.player = new Player();
        this.playersInScreen = [];
        this.pokemonInScreen = [];
        this.ctx = document.getElementById('theCanvas').getContext('2d');
        this.frames = 0;
    }

    animate(){
        this.ctx.clearRect(0,0,1000,500);
        this.draw(this.player);
        this.pokemonInScreen.forEach((onePoke)=>{
            this.draw(onePoke)
        })
        if(this.frames%2000===199)this.spawnRandomPokemon()

        this.frames++;
        window.requestAnimationFrame(this.animate.bind(this))
    }

    draw(what){
        this.ctx.fillRect(what.x, what.y, what.width, what.height)
    }

    spawnRandomPokemon(){
        this.pokemonInScreen.push(new Poke(Math.floor(Math.random()*1000),Math.floor(Math.random()*500)))

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
            this.x -=10;
            break;
            case 'ArrowRight':
            this.x +=10;
            break;
            case 'ArrowUp':
            this.y -=10;
            break;
            case 'ArrowDown':
            this.y +=10;
            break;
        }
    }
   

}




class Poke{
    constructor(x,y){
        this.width = 20;
        this.height= 20;
        this.x = x;
        this.y = y;


     // get everything from db
     this.moves = []
     this.currentHP = this.hp;

    }
        
}


document.getElementById('start-game').onclick = ()=>{
    theGame = new Game();
    theGame.animate();
}

document.onkeydown = (e)=>{
    if(e.key === 'ArrowLeft'||e.key === 'ArrowRight'||e.key === 'ArrowUp'||e.key === 'ArrowDown'){
        e.preventDefault();
        theGame.player.move(e.key);
    }
    
}