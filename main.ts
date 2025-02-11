let number = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.UntilDone)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.stringPlayable("- A B G C F E - ", 120), music.PlaybackMode.UntilDone)
        number = randint(1, 6)
        if (number == 1) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
        }
        if (number == 2) {
            basic.showLeds(`
                . . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . .
                `)
        }
        if (number == 3) {
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
                `)
        }
        if (number == 4) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
        }
        if (number == 5) {
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
        }
        if (number == 6) {
            basic.showLeds(`
                # . # . #
                . . . . .
                . . . . .
                . . . . .
                # . # . #
                `)
        }
    }
})
