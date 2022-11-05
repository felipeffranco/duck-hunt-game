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
        duck.atr = 'duck'
        duck.setAttribute("name", "duck");
        duck.style.cursor = 'pointer'
        duck.style.position = 'absolute'
        stopInterval = setInterval(() => {
            duck.style.top = Math.floor(Math.random()*65+5)+'%';
            duck.style.left = Math.floor(Math.random()*90+5)+'%'; 
        }, 2500);
        document.getElementsByClassName('flight-area')[0].appendChild(duck)
    

        document.querySelector('.flight-area').onclick = function (e) {

            var isflightArea = (e.srcElement.getAttribute("name") == "flight-area");
            var isDuck = (e.srcElement.getAttribute("name") == "duck")   
            
            if(isDuck) {

                duck.style.display = 'none'
                var queueTarget = document.getElementById('targets'); // Get the list whose id is queue.
                var elementsTarget = queueTarget.getElementsByTagName('div'); // Get HTMLCollection of elements with the li tag name.
                elementsTarget[indexTarget].style.display = 'none';
                indexTarget++;
                if(indexTarget == 3) {
                    alert('YOU WIN!')
                }
                
            }

            
            if(isflightArea) {

                for(var i =0; i < document.getElementsByName('life').length; i++) {
                    if(document.getElementsByName('life')[i].getAttribute("hidden") != "true") {
                        document.getElementsByName('life')[i].setAttribute("hidden", true)
                        document.getElementsByName('life')[i].style.display = 'none';
                        break;
                    }
                }
            }

        }
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


