class BigRobot implements Robot {
    constructor(
        private servo: servos.Servo, // For maqueenPlusV2, servo number instead of enum
        private speed: {
            left: number;
            right: number;
        },
        private servoAngle: {
            min: number;
            max: number;
        },
        private switchPin: DigitalPin
    ) {

        pins.setPull(this.switchPin, PinPullMode.PullUp);
        this.servo.setAngle((this.servoAngle.min + this.servoAngle.max) / 2);
    }

    forward(): void {
        maqueenPlusV2.controlMotor(
            maqueenPlusV2.MyEnumMotor.LeftMotor,
            maqueenPlusV2.MyEnumDir.Forward,
            this.speed.left
        );
        maqueenPlusV2.controlMotor(
            maqueenPlusV2.MyEnumMotor.RightMotor,
            maqueenPlusV2.MyEnumDir.Forward,
            this.speed.right
        );
    }

    turnLeft(): void {
        maqueenPlusV2.controlMotor(
            maqueenPlusV2.MyEnumMotor.RightMotor,
            maqueenPlusV2.MyEnumDir.Forward,
            this.speed.right
        );
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.LeftMotor);
    }

    turnRight(): void {
        maqueenPlusV2.controlMotor(
            maqueenPlusV2.MyEnumMotor.LeftMotor,
            maqueenPlusV2.MyEnumDir.Forward,
            this.speed.left
        );
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.RightMotor);
    }

    stop(): void {
        maqueenPlusV2.controlMotorStop(maqueenPlusV2.MyEnumMotor.AllMotor);
    }

    // yields
    dance(): void {
        for (;;) {
            const angle = pins.map(
                Math.sin(control.millis() / 300),
                -1,
                1,
                this.servoAngle.min,
                this.servoAngle.max
            );
            this.servo.setAngle(angle);
        }
    }

    isYellow(): boolean {
        return pins.digitalReadPin(this.switchPin) == 0;
    }
}
