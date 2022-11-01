export default class Duck {

    constructor() {
    }   

    randomDuck() {
        var i = 0
        , j = 0
        , temp = null
    
      for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }

    spawnDuck() {
        const duck = document.createElement('div')
        duck.className = 'duck'
        let random =
        duck.style.position = 
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
