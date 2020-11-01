import pino from 'pino';

export const logger = pino({
  name: process.env.npm_package_name,
  level: (process.env.BRASILSEG_PEC_API_LOG_LEVEL || 'debug').toLowerCase(),
  prettyPrint: {
    translateTime: true
  }
});
