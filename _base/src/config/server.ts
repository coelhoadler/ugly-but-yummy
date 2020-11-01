import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import pino from 'pino-http';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

dotenv.config();

import { logger } from '../utils/logger';
import routes from '../routes';

import * as awsSetup from './aws';

if (!awsSetup.initialize())
  logger.error('Erro carregando configuracoes aws');

const openApiDocumentation = YAML.load('api-docs/openapi.yaml');
const app = express();

app.use(pino({logger: logger, useLevel: 'trace'}));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));
app.use(routes);

export default app;