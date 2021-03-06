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
        this.player.move()
        if(this.frames%2000===199) this.spawnRandomPokemon()

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
        this.keysPressed=[];
    }

    move(){

        if(this.keysPressed.includes("ArrowLeft"))
        this.x-=3;
        if(this.keysPressed.includes("ArrowRight"))
        this.x+=3;
        if(this.keysPressed.includes("ArrowUp"))
        this.y-=3;
        if(this.keysPressed.includes("ArrowDown"))
        this.y+=3;
     
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
        if(!theGame.player.keysPressed.includes(e.key))
        theGame.player.keysPressed.push(e.key);

        console.log(theGame.player.keysPressed)
    }
    
}

document.onkeyup = (e)=>{
    if(e.key === 'ArrowLeft'||e.key === 'ArrowRight'||e.key === 'ArrowUp'||e.key === 'ArrowDown'){
        var index = theGame.player.keysPressed.indexOf(e.key);
        theGame.player.keysPressed.splice(index, 1);
        console.log(theGame.player.keysPressed)
    }
    
}