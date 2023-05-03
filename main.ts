input.onButtonPressed(Button.A, function () {
    if (gucci == 0) {
        Radio_GPIO += -1
        basic.showString("" + (Radio_GPIO))
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gucci == 0) {
        Radio_GPIO += 1
        basic.showString("" + (Radio_GPIO))
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    if (gucci == 0) {
        radio.setGroup(Radio_GPIO)
        gucci = 1
        music.playMelody("C - E - G - B C5 ", 120)
    }
})
let Radio_GPIO = 0
let gucci = 0
gucci = -1
basic.showString("Choose Your Channel (A=Back B=Forward)")
basic.clearScreen()
gucci = 0
Radio_GPIO = 1
basic.forever(function () {
	
})
