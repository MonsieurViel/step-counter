let nombre_de_pas = 0
input.onButtonPressed(Button.A, function () {
    nombre_de_pas = 0
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(nombre_de_pas)
})
input.onGesture(Gesture.Shake, function () {
    nombre_de_pas += 1
})
basic.forever(function () {
	
})
