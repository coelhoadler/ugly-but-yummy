import app from './config/server';
import { logger } from './utils/logger';

app.listen(process.env.BRASILSEG_PEC_API_PORT, () => {
  if (logger.isLevelEnabled('info')) logger.info(`Express server running at port ${process.env.BRASILSEG_PEC_API_PORT}`);
});