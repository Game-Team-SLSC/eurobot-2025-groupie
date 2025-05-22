const pami = journeys[robotConfig.journey];
if (!pami) {
    serial.writeLine("PAMI not found");
}

pause(pami.delayBeforeStart);
if (robotConfig.robot.isYellow()) {
    pami.runYellow(robotConfig.robot);
} else {
    pami.runBlue(robotConfig.robot);
}

robotConfig.robot.dance();
