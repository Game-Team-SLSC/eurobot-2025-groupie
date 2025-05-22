class SmallRobot implements Robot {
    constructor(
        private servo: maqueen.Servos,
        private speed: {
            left: number
            right: number
        },
        private servoAngle: {
            min: number
            max: number
        },
        private switchPin: DigitalPin
    ) {}

    forward(): void {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, this.speed.left)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, this.speed.right)
    }

    turnLeft(): void {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, this.speed.right)
    }

    turnRight(): void {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, this.speed.left)
    }

    stop(): void {
        maqueen.motorStop(maqueen.Motors.All)
    }

    // yields
    dance(): void {
        for (;;) {
            const angle = pins.map(
                Math.sin(control.millis() / 300),
                -1,
                1,
                40,
                160
            )
            maqueen.servoRun(this.servo, angle)
        }
    }

    isYellow(): boolean {
        return pins.digitalReadPin(this.switchPin) == 0
    }
}
