import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

import { APIResults } from '../enums/APIResults';
import { PECAnalysisRequestDTO, PECAnalysisResponseDTO } from '../models/dtos/PECAnalysisDTO';

import PECGeoValidateService from '../services/PECGeoValidateService';
import PecRequestPublisher from '../../config/aws/pecRequestPublisher';

class PECAnalysisController {
  create(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      if (req.log.isLevelEnabled('debug')) req.log.debug(`Mensagem recebida com erros, rejeitando requisição: ${JSON.stringify(errors)}`);
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).send({
        status: APIResults.INVALID_DATA,
        content: errors
      } as PECAnalysisResponseDTO);
      return;
    }

    const data: PECAnalysisRequestDTO = req.body as PECAnalysisRequestDTO;
    const { externalId } = data;
    const { authorization } = req.headers;

    PECGeoValidateService
      .validate(externalId, authorization)
      .subscribe(
        ({ status, uuid, content }) => {
          
          const publisher: PecRequestPublisher = PecRequestPublisher.getInstance(undefined);
          publisher.send(JSON.stringify({ uuid, ...content, ...data }))
            .then(() => res.status(StatusCodes.CREATED).json({ status, uuid }))
            .catch(err => res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err));

        },
        err => res.status(StatusCodes.NOT_FOUND).json(err)
      );
  }
}

export default new PECAnalysisController();
