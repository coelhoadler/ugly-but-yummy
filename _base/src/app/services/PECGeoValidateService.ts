import { v4 as uuidv4 } from 'uuid';
import { Observable, Observer } from 'rxjs';

import { APIResults } from '../enums/APIResults';
import { GeoValidateResults } from '../enums/GeoValidateResults';
import { PECGeoValidateResponseDTO } from '../models/dtos/PECGeoValidateDTO';

import geoValidateAPI from '../../config/axios';
import { logger } from '../../utils/logger';

class PECGeoValidateService {

  validate(externalId: number, token: string | undefined): Observable<PECGeoValidateResponseDTO> {
    return new Observable((observer: Observer<PECGeoValidateResponseDTO>) => {
      geoValidateAPI.get(`?externalId=${externalId}`, { headers: { 'Authorization': token }})
        .then(result => {

          const payload = result.data.data[0];
          const { culture, glebas, proposal } = payload;

          observer.next({
            status: APIResults.SUCCESS,
            uuid: uuidv4(),
            content: {
              crop: culture.name,
              proposalId: proposal.code,
              glebes: glebas.map((glebe: any) => glebe.geometry)
            }
          } as PECGeoValidateResponseDTO);

        })
        .catch((e) => {
          logger.error('Erro na chamada do geovalidate', e);
          return observer.error({ status: APIResults.ERROR, content: { errors: [{ msg: GeoValidateResults.PROPOSAL_NOT_FOUND, nestedErrors: { e } }]} });
        })
        .finally(() => observer.complete());
    });
  }

}

export default new PECGeoValidateService();
