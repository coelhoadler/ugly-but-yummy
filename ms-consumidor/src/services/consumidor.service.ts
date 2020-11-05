import { CreateQuery } from 'mongoose';
import Consumidor, { IConsumidor } from '../models/consumidor.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumidorService {
    async Criar(consumidor: CreateQuery<IConsumidor>): Promise<IConsumidor> {
        return Consumidor.create(<IConsumidor>{
            nome: consumidor.nome,
            doc: consumidor.doc,
            endereco: consumidor.endereco,
            telefone: consumidor.telefone,
            email: consumidor.email,
        }).then((data: IConsumidor) => {
            return data;
        }).catch((error: Error) => {
            throw error;
        });
    }

    async Buscar(id: String): Promise<IConsumidor[]> {
        if (id)
            return Consumidor.find({ '_id': id });
        else
            return Consumidor.find({})
                .then((data: IConsumidor[]) => {
                    return data;
                }).catch((error: Error) => {
                    throw error;
                });

    }
};