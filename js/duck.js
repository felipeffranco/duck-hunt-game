export default class Duck {

    constructor() {
        this.spawnDuck()
    }   

    flight() {
        
    }

    spawnDuck() {
        const duck = document.createElement('div')
        duck.id = 'duck' + Math.floor(Math.random() * (3 - 1 + 1) + 1)
        duck.style.cursor = 'pointer'
        duck.addEventListener('click', this.gotShot)
    }

    static gotShot(e) {
        console.log(e);
    }

}
