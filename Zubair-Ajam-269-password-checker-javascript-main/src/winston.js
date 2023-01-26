const winston = require("winston");

const logger = winston.createLogger({
	level: "debug",
	format: winston.format.json(),
	defaultMeta: { service: "user-service" },
	transports: [
		new winston.transports.Console({ level: "debug" }),
		new winston.transports.File({
			filename: "logs/errors.log",
			level: "error",
		}),
	],
});
module.exports = { logger };
