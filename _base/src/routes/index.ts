import express from 'express';

import pecAnalysisRouter from './PECAnalysisRoute';

const routes = express.Router();

routes.use(pecAnalysisRouter);

export default routes;
