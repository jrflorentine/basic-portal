radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == color) {
        strip.showRainbow(1, 360)
        basic.pause(1000)
        strip.showColor(color)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        basic.pause(1000)
        strip.showColor(color)
    }
})
let color = 0
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
color = neopixel.colors(NeoPixelColors.Green)
strip.showColor(color)
strip.show()
