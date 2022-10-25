/*
**
** DUCK HUNT JAVASCRIPT
** Author: Felipe Franco
**
*/

/* 
NEEDS
    ducks (maybe an array or object with 2 types of ducks flight/colors)
    levels (int) 1 - 2 - 3
    waves - qty of ducks (int) 2 - 3 - 4
    bullets/life (int) 3 - 4 - 5
        levei 1 > 2 ducks in 3 waves (6 ducks total) > 3 bullets per wave 
        level 2 > 3 ducks in 5 waves (15 ducks total) > 4 bullets per wave
        level 3 > 4 ducks in 7 waves (28 ducks total) > 5 bullets per wave

SHOW DATA
    score (int) 100 per duck + 200 per level passed
    bullets (number)
    ducks wave/killed (number)

CONTROLS
    start (enter)
    pause (p)
    mute (m)
    fullscreen (f)
    mouse left click (shoot)

REQUIREMENTS 
    WIN (> 80% ducks killed per level)
    LOSE (< 80% ducks killed per level)
*/

/*
After each shoot:
    if shooted the duck
        change duck image (shooted) and stay for 2 seconds > IMAGE
        change duck image (shooted down) > IMAGE
        show dog image with a duck in it hand > IMAGE
        paint 1 duck with red color (ducks list) 
        reduce 1 bullet > TEXT
        sum 100 in score > TEXT
    else 
        blink screen (white)
        reduce 1 bullet
*/

class startGame {
    constructor() {
        
    }
}