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

import Duck from './duck.js';

let duck1 = new Duck;
let duck2 = new Duck;
let duck3 = new Duck;

class NewGame {
    constructor() {
        this.linkButtons();
        this.isStarted = false;
        this.isPaused = false;
        this.level1 = [duck1, duck2, duck3];
    }

    start() {
        if(!this.isStarted) {
            console.log('start')
            this.isStarted = true;
            this.level1.map((duck) => {
                duck.spawnDuck();
            })
        }
    }

    level1() {
        console.log('level 1')
    }

    restart() {
        window.location.reload();
    }

    pause() {
        this.level1.map((duck) => {
            duck.clearDuck();
        })
    }

    unpause() {
        this.level1.map((duck) => {
            duck.unpauseDuck();
        })
    }

    win() {
        console.log('win');
    }

    lose() {        
        console.log('lose');
    }

    fullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

    linkButtons() {
        let changeToRestart = document.querySelector('#start-game') 
        document.querySelector('#start-game').onclick = function(){
            changeToRestart.innerHTML = `restart game (r)`
            game.start();
        };

        //Type ENTER to START
        document.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                game.start();
                changeToRestart.innerHTML = `restart game (r)`
            }
        }, false);    
        //Type R to RESTART   
        document.addEventListener("keydown", (e) => {
            if (e.key === "r") {
                game.restart();
                changeToRestart.innerHTML = `start game (enter)`
            }
        }, false);    

        let changeToUnpause = document.querySelector('#pause-game');
        document.querySelector('#pause-game').onclick = function() {
            
            if(changeToUnpause.getAttribute("func") == "pause") {
                game.pause();
                changeToUnpause.innerHTML = `unpause (u)`;
                changeToUnpause.setAttribute("func","unpause")
    
            }
             else {
                game.unpause();
                changeToUnpause.innerHTML = `pause (p)`
                changeToUnpause.setAttribute("func","pause")
             }

        }

        //Type P to PAUSE
        document.addEventListener("keydown", (e) => {
            if (e.key === "p") {
                game.pause();
                changeToUnpause.innerHTML = `unpause (u)`
            }
        }, false);
        //Type U to UNPAUSE
        document.addEventListener("keydown", (e) => {
            if (e.key === "u") {
                game.unpause();
                changeToUnpause.innerHTML = `pause game (p)`
            }
        }, false);
        //Type F to FULLSCREEN
        let fullscreen = document.querySelector('#screen-game').addEventListener('click', this.fullscreen)
        document.addEventListener("keydown", (e) => {
            if (e.key === "f") {
                game.fullscreen();
            }
        }, false);

        /*let muteGame = document.querySelector('#mute-game').addEventListener('click', this.mute)*/            
    }
}

let game = new NewGame();
// game.start();
