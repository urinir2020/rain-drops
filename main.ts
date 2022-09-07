let NUM = 0
let NUM2 = 0
basic.forever(function () {
    NUM = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        led.plot(NUM, index)
        basic.pause(150)
        led.unplot(NUM, index)
    }
})
basic.forever(function () {
    NUM2 = randint(0, 4)
    for (let index = 0; index <= 3; index++) {
        led.plot(NUM2, index + 1)
        basic.pause(150)
        led.unplot(NUM2, index + 1)
    }
})
