// import winston, { transports, format } from 'winston';
const winston = require('winston')
const { transports, format} = winston

// Setup log format
const logform = format.combine(
  format.label({ label: 'API' }),
  format.timestamp({ format: 'MM/DD/YYYY hh:mm:ssA' }),
  format.printf(({ level, label, message, timestamp }) => {
    return `${timestamp} [${label}] ${level.toUpperCase()}: ${message}`;
  })
);

const logpath = process.env.NODE_ENV === 'production' ? '/var/log/api/' : './api-';

const logger = winston.createLogger({
  format: logform,
  transports: [
    new transports.File({
      filename: `${logpath}error.log`,
      level: 'error'
    }),
    new transports.File({ filename: `${logpath}debug.log` })
  ]
});

// Only log to console in dev
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize({ message: true }),
      logform
    )
  }));
}

module.exports = logger;
