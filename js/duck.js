export default class Duck {

    constructor() {
    }   

    spawnDuck() {
        const duck = document.createElement('div')
        duck.className = 'duck'
        duck.style.cursor = 'pointer'
        duck.addEventListener('click', this.gotShot)
        document.getElementsByClassName('flight-area')[0].appendChild(duck)
        //document.getElementsByClassName('flight-area')[0].appendChild(duck)
    }

    hideDuck() {
        const duck = document.querySelector('.duck')
        const flightArea = document.querySelector('.flight-area');
        console.log(flightArea);
        flightArea.removeChild(duck);
    }

    static gotShot(e) {
        console.log(e);
    }

}
