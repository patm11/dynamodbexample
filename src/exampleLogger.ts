import winston = require("winston");

const { timestamp, prettyPrint, combine } = winston.format;

export const exampleLogger = winston.createLogger({
    levels: winston.config.syslog.levels,
    format: combine(
        timestamp(),
        prettyPrint(),
    ),
    transports: [
        new winston.transports.Console()
    ]
});