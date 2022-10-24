let duck1 = document.getElementById('duck1');
let duck2 = document.getElementById('duck2');
let duck3 = document.getElementById('duck3');
let duck4 = document.getElementById('duck4');
var dog = document.getElementById('dog');

function kill1() {
    duck1.style.display= "none";
}

function kill2() {
    duck1.style.display= "none";
}

function kill3() {
    duck1.style.display= "none";
}

function kill4() {
    duck1.style.display= "none";
}

function win() {
    counter = 0;
    if(duck1.style.display=="none" && 
       duck2.style.display=="none" && 
       duck3.style.display == "none" && 
       duck4.style.display=="none") {
        let level = counter++;
        console.log(`Level ${level}`)
    }
    dog.src="./images/dog-win.png";
}

function lose() {
    alert(`You Lose!`)    
}
