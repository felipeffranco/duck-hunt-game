let arrInterval = [];
let arrDuck = [];
let indexTarget = 0;
let indexLifes = 0;

export default class Duck {
    constructor() {
    }   

    getRandom(min, max) {
        var number = Math.floor((Math.random() * (max - min) + 1) + min);
        return number;
    }

    clearDuck() { 
        for(let i = 0; i < arrInterval.length; i++) {
            clearInterval(arrInterval[i]);
        }
    }

    unpauseDuck() {
        let stopInterval = null;
        for(let i = 0; i < arrDuck.length; i++) {
            stopInterval = setInterval(() => {
                arrDuck[i].style.top = Math.floor(Math.random()*65+5)+'%';
                arrDuck[i].style.left = Math.floor(Math.random()*90+5)+'%'; 
            }, 2500);
            arrInterval.push(stopInterval);
        }
    }

    spawnDuck() {
        let stopInterval = null;
        const duck = document.createElement('div')
        duck.className = 'duck'
        duck.style.cursor = 'pointer'
        duck.style.position = 'absolute'
        stopInterval = setInterval(() => {
            duck.style.top = Math.floor(Math.random()*65+5)+'%';
            duck.style.left = Math.floor(Math.random()*90+5)+'%'; 
        }, 2500);
        document.getElementsByClassName('flight-area')[0].appendChild(duck)
        duck.onclick = function () {
            duck.style.display = 'none'
            var queueTarget = document.getElementById('targets'); // Get the list whose id is queue.
            var elementsTarget = queueTarget.getElementsByTagName('div'); // Get HTMLCollection of elements with the li tag name.
            elementsTarget[indexTarget].style.display = 'none';
            indexTarget++;
            if(indexTarget == 3) {
                alert('YOU WIN!')
            }
        };
        document.querySelector('.flight-area')[0].onclick = function () {
            var queueLifes = document.getElementById('lifes'); // Get the list whose id is queue.
            var elementsLifes = queueLifes.getElementsByTagName('div'); // Get HTMLCollection of elements with the li tag name.
            elementsLifes[indexLifes].style.display = 'none';
            indexLifes++;
            if(indexLifes == 3) {
                alert('GAME OVER')
            }
        };
        arrInterval.push(stopInterval);
        arrDuck.push(duck);
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


