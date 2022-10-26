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

class targets {
    constructor(urlImage, points) {
        this.urlImage = urlImage;
        this.points = points;
    }
}

class newGame {
    constructor(targets, level, waves, lifes, totalScore, totalTargets) {
        this.targets = targets;
        this.level = level;
        this.waves = waves;
        this.lifes = lifes;
        this.totalScore = totalScore;
        this.totalTargets = totalTargets;
    }

    render() {
        const render = document.getElementById('body');
        const background = document.createElement('section');
        background.className = 'background';
        background.innerHTML = `
            <div class="flight-area"></div>
            <div class="infos">

            </div>
            <div class="shortcuts">
                <a href=""></a>
            </div>
        `;
        render.append(background);
    }

    start() {}

    pause() {}

    mute() {}

    fullscreen() {}

    shoot() {}

    win() {}

    lose() {}
}

let game = new newGame();
game.render();
