import { Schema } from 'express-validator';
import { APIResults } from '../../enums/APIResults';

export interface PECGeoValidateResponseDTO {
  status: APIResults,
  uuid?: string,
  message?: string,
  content?: PECGeoValidateContentDTO
}

export interface PECGeoValidateContentDTO {
  crop: string,
  glebes: Array<PECGeoValidateGlebeDTO>
}

export interface PECGeoValidateGlebeDTO {
  type: string,
  coordinates: Array<Array<Array<number>>>
}

export const schemaPECGeoValidateRequestDTO: Schema = {
  externalId: {
    in: ['params'],
    exists: { errorMessage: 'Campo externalId é obrigatório' },
    isNumeric: { errorMessage: 'O valor do campo externalId deve ser numérico' }
  }
};
