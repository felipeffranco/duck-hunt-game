export default class Duck {
    constructor() {
    }   

    getRandom(min, max) {
        var number = Math.floor((Math.random() * (max - min) + 1) + min);
        return number;
    }

    randomFlight() {
    }     

    spawnDuck() {
        const duck = document.createElement('div')
        duck.className = 'duck'
        duck.style.cursor = 'pointer'
        duck.style.position = 'absolute'
        //setInterval para fazer timer alternando X e Y 
        setInterval(() => {
            duck.style.top = Math.floor(Math.random()*65+5)+'%';
            duck.style.left = Math.floor(Math.random()*90+5)+'%'; 
        }, 1500);
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


