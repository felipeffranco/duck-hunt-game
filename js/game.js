/*
** DUCK/OBJECT HUNT JAVASCRIPT
** Author: Felipe Franco
*/

/* 

NEEDS
    target, ducks or other object (maybe an array or object with 2 types of ducks flight/colors)
    level (int) 1 - 2 - 3
    waves - qty of objects flying (int) 2 - 3 - 4
    bullets/lifes (int) 3 - 4 - 5
        levei 1 = 2 objects in 3 waves (6 objects total) = 3 bullets/lifes per wave 
        level 2 = 3 objects in 5 waves (15 objects total) = 4 bullets/lifes per wave
        level 3 = 4 objects in 7 waves (28 objects total) = 5 bullets/lifes per wave

SHOW DATA
    score (int) 100 per object + 200 per level passed
    bullets/lifes (number)
    objects wave like WAVE 1 of 3 (level 1) (number)
    objects killed group by all wave of level like KILLED 2 of 28 (number)

CONTROLS
    start (enter)
    pause (p)
    mute (m)
    fullscreen (f)
    mouse left click (shoot)

REQUIREMENTS 
    WIN (> 80% objects killed per level)
    LOSE (< 80% objects killed per level)


After each shoot:
    if shooted the object
        change object image (shooted) and stay for 2 seconds > IMAGE
        change object image (shooted down) > IMAGE
        paint 1 object with red color (objects list) 
        reduce 1 bullet > TEXT
        sum 100 in score > TEXT
    else 
        blink screen (white)
        reduce 1 bullet
*/

import Duck from './duck.js'
//console.log(Duck)

class NewGame {
    constructor() {
        this.linkButtons()
        this.isStarted = false;
    }

    shoot(e) {
        console.log('alguém atirou em mim e eu vou morrer :)')
        console.log(e)
    }

    start() {
        if(!this.isStarted) {
            this.isStarted = true;
            const firstDuck = document.createElement('div')
            const secondDuck = document.createElement('div')
            firstDuck.id = 'duck1'
            secondDuck.id = 'duck2'
            firstDuck.style.cursor = 'pointer'
            secondDuck.style.cursor = 'pointer'
            firstDuck.addEventListener('click', game.shoot)
            secondDuck.addEventListener('click', game.shoot)
            document.getElementsByClassName('flight-area')[0].appendChild(firstDuck)
            document.getElementsByClassName('flight-area')[0].appendChild(secondDuck)    
        }


        //iniciar a logica do jogo //enable game //aparecer funcoes e disponibilizar shoot //colocar botao
        // if (this.level == 1) {
        //     console.log('level 1')

        // } else if (this.level == 2) {
        //     console.log('level 2')
        // } else if (this.level == 3) {
        //     console.log('level 3')
        // }
    }

    restart() {
        if(!this.isStarted) {

        }
    }

    pause() {
        console.log('pause');
        animation.pause();
    }

    resumeGame() {
        console.log('resume');
    }

    mute() {
        console.log('mute');

    }

    fullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    win() { }

    lose() { }

    linkButtons() {
        let startGame = document.querySelector('#start-game').addEventListener('click', this.start)
        let changeToRestart = document.querySelector('#start-game');
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                game.start();
                changeToRestart.innerHTML = `restart game (r)`
            }
        }, false);

        document.addEventListener("keydown", (e) => {
            if (e.key === "r") {
                game.start();
                changeToRestart.innerHTML = `start game (enter)`
            }
        }, false);
        
        let pauseGame = document.querySelector('#pause-game').addEventListener('click', this.pause)
        document.addEventListener("keydown", (e) => {
            if (e.key === "p") {
                game.pause();
            }
        }, false);

        /*let muteGame = document.querySelector('#mute-game').addEventListener('click', this.mute)*/
        
        let fullscreen = document.querySelector('#screen-game').addEventListener('click', this.fullscreen)
        document.addEventListener("keydown", (e) => {
            if (e.key === "f") {
                game.fullscreen();
            }
        }, false);
    }
}

let game = new NewGame();
// game.start();
