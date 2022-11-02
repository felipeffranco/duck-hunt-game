export default class Duck {
    constructor() {

    }   

    randomFlight() {
        this.xPosition = xPosition; //top
        this.yPosition = yPosition; //left
        const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
        xPosition.style.left= getRandom(0, 1000 - 200)+'px'; // 👈🏼 Horizontally
        yPosition.style.top = getRandom(0, 300 - 200)+'px'; // 👈🏼 Vertically
        
/*      const square= document.querySelector('.duck');
        setInterval(() => {
            square.style.left= getRandom(0, 300 - 200)+'px'; // 👈🏼 Horizontally
            square.style.top = getRandom(0, 300 - 200)+'px'; // 👈🏼 Vertically
        }, 500); // every 1/2 second
 */        
        
        document.getElementById("square").style.top=top+"px";                   
        document.getElementById("square").style.left=left+"px";       
    }

    spawnDuck() {
        const duck = document.createElement('div')
        duck.className = 'duck'
        duck.style.cursor = 'pointer'
        duck.style.position = 'absolute'
        //setInterval para fazer timer alternando X e Y 
        setInterval(() => {
            console.log('entrou timer')
            this.randomFlight; 
            duck.style.top = this.randomFlight;
        }, 500);
        duck.addEventListener('click', this.gotShot)
        document.getElementsByClassName('flight-area')[0].appendChild(duck)
    }

    hideDuck() {
        const duck = document.querySelector('.duck')
        const flightArea = document.querySelector('.flight-area');
        flightArea.removeChild(duck);
    }

    static gotShot(e) {
        console.log(e);
    }

}
