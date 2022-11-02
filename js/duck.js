export default class Duck {
    constructor() {

    }   

    randomFlight() {
        var top=Math.random();
        top=top*1000;   
        var left=Math.random();
        left=left*1000;                    
        
        const ducks = document.querySelectorAll('.duck');
        
    }

    spawnDuck() {
        const duck = document.createElement('div')
        duck.className = 'duck'
        duck.style.cursor = 'pointer'
        duck.style.position = 'absolute'
        //setInterval para fazer timer alternando X e Y 
        setInterval(() => {
            this.randomFlight();
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


