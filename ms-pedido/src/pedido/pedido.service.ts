import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pedido, PedidoDocument } from './pedido.schema';
import { PedidoDto } from './pedido.dto';
import { SlackService } from './../shared/services/slack.service';

@Injectable()
export class PedidoService {
    constructor(
        @InjectModel(Pedido.name) private _pedidoSchema: Model<PedidoDocument>,
        private _slackService: SlackService 
    ) { }

    async create(pedidoDto: PedidoDto): Promise<Pedido> {
        this._slackService.postMessage(pedidoDto);
        const schema = new this._pedidoSchema(pedidoDto);
        return schema.save();
    }

    async findBy(prop: string, propValue: string): Promise<Pedido[]> {
        let findBy = {};
        findBy[prop] = propValue;
        return this._pedidoSchema.find(findBy).exec();
    }

    async findById(pedidoId: string): Promise<Pedido> {
        return this._pedidoSchema.findById(pedidoId).exec();
    }

    async findAll(): Promise<Pedido[]> {
        return this._pedidoSchema.find().exec();
    }

    async delete(pedidoId: string): Promise<any> {
        return (await this._pedidoSchema.deleteOne({ _id: pedidoId })).deletedCount;
    }

    async update(id: string, pedidoDto: PedidoDto): Promise<Pedido> {
        return this._pedidoSchema.updateOne({ _id: id }, pedidoDto);
    }
}
