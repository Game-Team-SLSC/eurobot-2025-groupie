const robotConfig: {
    journey: JourneyType,
    robot: Robot
} = {
    journey: JourneyType.LastZone,
    robot: new SmallRobot(
        maqueen.Servos.S1,
        {
            left: 210,
            right: 245
        },
        {
            min: 40,
            max: 160
        },
        DigitalPin.P0
    )
};
