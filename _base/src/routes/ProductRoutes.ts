import express, { Request, Response } from 'express';
import { checkSchema } from 'express-validator';

import pecAnalysisController from '../app/controllers/PECAnalysisController';
import { schemaPECAnalysisRequestDTO } from '../app/models/dtos/PECAnalysisDTO';

const routes = express.Router();

routes.post('/create', checkSchema(schemaPECAnalysisRequestDTO), (request: Request, response: Response) => {
  pecAnalysisController.create(request, response);
});

export default routes;