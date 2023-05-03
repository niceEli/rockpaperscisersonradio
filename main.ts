enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (gucci == 1) {
        rad = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    if (gucci == 0 || gucci == 1) {
        Radio_GPIO = Math.constrain(Radio_GPIO - 1, 1, 255)
        if (gucci == 1) {
            Radio_GPIO = Math.constrain(Radio_GPIO, 1, 3)
        }
        basic.showString("" + (Radio_GPIO))
        basic.pause(100)
        basic.clearScreen()
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    if (gucci == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        radio.sendNumber(Radio_GPIO)
        while (rad == 0) {
        	
        }
        if (Radio_GPIO == 1) {
            if (Radio_GPIO == 1) {
                basic.showString("draw")
            } else if (Radio_GPIO == 2) {
                basic.showString("lose")
            } else {
                basic.showString("WIN!!!")
            }
        } else if (Radio_GPIO == 2) {
            if (Radio_GPIO == 1) {
                basic.showString("WIN!!!")
            } else if (Radio_GPIO == 2) {
                basic.showString("draw")
            } else {
                basic.showString("lose")
            }
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (gucci == 0 || gucci == 0) {
        Radio_GPIO = Math.constrain(Radio_GPIO + 1, 1, 255)
        if (gucci == "1") {
            Radio_GPIO = Math.constrain(Radio_GPIO, 1, 3)
        }
        basic.showString("" + (Radio_GPIO))
        basic.pause(100)
        basic.clearScreen()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.Shake, function () {
    if (gucci == 0) {
        radio.setGroup(Radio_GPIO)
        gucci = 1
        music.playMelody("C - E - G - B C5 ", 120)
    }
    if (gucci == 1) {
        music.playMelody("C5 B - G - E - C ", 120)
        if (Radio_GPIO == 1) {
            basic.showString("ROCK!")
        } else if (Radio_GPIO == 2) {
            basic.showString("PAPER!")
        } else {
            basic.showString("SCISORS")
        }
    }
})
let rad = 0
let Radio_GPIO = 0
let gucci = 0
gucci = -1
basic.showString("Choose Your Channel (A=Back B=Forward)")
basic.clearScreen()
gucci = 0
Radio_GPIO = 1
rad = 0
basic.forever(function () {
	
})
