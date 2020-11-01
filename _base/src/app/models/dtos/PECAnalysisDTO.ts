import { Result, Schema, ValidationError } from 'express-validator';
import validator from 'validator';
import { APIResults } from '../../enums/APIResults';
import { WeatherEvents_List, WeatherEvents_Values } from '../../enums/WeatherEvent';

export interface PECAnalysisRequestDTO {
  externalId: number;
  orderId: string;
  weatherEvent: number;
  weatherEventDate: Date;
  notificationUrl: string;
}

export interface PECAnalysisResponseDTO {
  status: APIResults,
  uuid?: string,
  content: PECAnalysisRequestDTO | Result<ValidationError>
}

export const schemaPECAnalysisRequestDTO: Schema = {
  externalId: {
    in: ['body'],
    exists: { errorMessage: 'Campo externalId é obrigatório' },
    isNumeric: { errorMessage: 'O valor do campo externalId deve ser numérico' }
  },
  orderId: {
    in: ['body'],
    exists: { errorMessage: 'Campo orderId é obrigatório' },
    isUUID: { errorMessage: 'O valor do campo orderId deve ser um UUID válido' }
  },
  weatherEvent: {
    in: ['body'],
    exists: { errorMessage: 'Campo weatherEvent é obrigatório' },
    isNumeric: { errorMessage: 'O valor do campo weatherEvent deve ser numérico' },
    isIn: {
      options: [ WeatherEvents_Values ],
      errorMessage: 'O valor do campo weatherEvent deve estar entre: ' + WeatherEvents_List
    }
  },
  weatherEventDate: {
    in: ['body'],
    exists: { errorMessage: 'Campo weatherEventDate é obrigatório' },
    custom: {
      options: (value: string): Promise<string | void> => {
        // eslint-disable-next-line no-useless-escape
        const regexpDateTime = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
        if (!regexpDateTime.test(value)) {
          return Promise.reject('Formato da data/hora para o campo weatherEventDate inválido, deve estar no formato [yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\']');
        }
        if (!validator.isISO8601(value.substr(0,10), { strict: true })) {
          return Promise.reject('Deve informar uma data válida');
        }
        return Promise.resolve();
      }
    }
  },
  notificationUrl: {
    in: ['body'],
    exists: { errorMessage: 'Campo notificationUrl é obrigatório' },
    isURL: { 
      options: [{require_tld: false}],
      errorMessage: 'O valor do campo notificationUrl deve ser uma URL válida' 
    }
  }
};
