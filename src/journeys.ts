type JourneyDefinition = {
    delayBeforeStart: number
    runYellow: (robot: Robot) => void
    runBlue: (robot: Robot) => void
}

enum JourneyType {
    LastZone,
    MiddleZone,
    FirstZone,
}

/*

PAMI 1 : Starts in left corner near the stack - zone in the back
PAMI 2 : Starts on the black line             - zone in the middle
PAMI 3 : Starts next to the 2nd robot         - zone in the front

*/

const journeys = {
    [JourneyType.LastZone]: {
        delayBeforeStart: 1000,
        runYellow: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnRight()
            basic.pause(500)
            robot.forward()
            basic.pause(750)
            robot.turnLeft()
            basic.pause(460)
            robot.forward()
            basic.pause(5500)
            robot.stop()
        },
        runBlue: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnLeft()
            basic.pause(500)
            robot.forward()
            basic.pause(750)
            robot.turnRight()
            basic.pause(460)
            robot.forward()
            basic.pause(5500)
            robot.stop()
        },
    },
    [JourneyType.MiddleZone]: {
        delayBeforeStart: 1000,
        runYellow: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnLeft()
            basic.pause(500)
            robot.forward()
            basic.pause(1000)
            robot.turnRight()
            basic.pause(460)
            robot.forward()
            basic.pause(4000)
            robot.stop()
        },
        runBlue: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnRight()
            basic.pause(500)
            robot.forward()
            basic.pause(1000)
            robot.turnLeft()
            basic.pause(460)
            robot.forward()
            basic.pause(4000)
            robot.stop()
        },
    },
    [JourneyType.FirstZone]: {
        delayBeforeStart: 1000,
        runYellow: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnLeft()
            basic.pause(500)
            robot.forward()
            basic.pause(1200)
            robot.turnRight()
            basic.pause(460)
            robot.forward()
            basic.pause(2500)
            robot.stop()
        },
        runBlue: (robot: Robot) => {
            robot.forward()
            basic.pause(1000)
            robot.turnRight()
            basic.pause(500)
            robot.forward()
            basic.pause(1200)
            robot.turnLeft()
            basic.pause(460)
            robot.forward()
            basic.pause(2500)
            robot.stop()
        },
    },
}