input.onGesture(Gesture.TiltLeft, function () {
    music.playMelody("A E G B C5 D F G ", 144)
})
input.onGesture(Gesture.Shake, function () {
    if (input.temperature() < 3) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onSound(DetectedSound.Quiet, function () {
    music.playMelody("E B C5 A B G A F ", 144)
})
