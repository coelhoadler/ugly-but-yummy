import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Consumidor, ConsumidorDocument } from './consumidor.schema';
import { ConsumidorDto } from './consumidor.dto';
import { ObjectID } from 'mongodb';
import { SlackService } from '../shared/services/slack.service';

@Injectable()
export class ConsumidorService {
    constructor(
        @InjectModel(Consumidor.name) private _consumidorSchema: Model<ConsumidorDocument>,
        private _slackService: SlackService
    ) { }

    async create(consumidorDto: ConsumidorDto): Promise<Consumidor> {
        this._slackService.postMessage(consumidorDto);
        const schema = new this._consumidorSchema(consumidorDto);

        return schema.save();
    }

    async findBy(prop: string, propValue: string): Promise<Consumidor[]> {
        let findBy = {};
        findBy[prop] = propValue;
        return this._consumidorSchema.find(findBy).exec();
    }

    async findById(consumidorId: string): Promise<Consumidor> {
        return this._consumidorSchema.findById(consumidorId).exec();
    }

    async findAll(): Promise<Consumidor[]> {
        return this._consumidorSchema.find().exec();
    }

    async delete(consumidorId): Promise<any> {
        console.log('id: ', consumidorId);
        return (await this._consumidorSchema.deleteOne({ "_id" : consumidorId })).deletedCount;
    }

    async update(id: string, consumidorDto: ConsumidorDto): Promise<Consumidor> {
        return this._consumidorSchema.updateOne({ _id: id }, consumidorDto);
    }
}
