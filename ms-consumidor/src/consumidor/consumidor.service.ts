import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Consumidor, ConsumidorDocument } from './consumidor.schema';
import { ConsumidorDto } from './consumidor.dto';

@Injectable()
export class ConsumidorService {
    constructor(
        @InjectModel(Consumidor.name) private _consumidorSchema: Model<ConsumidorDocument>
    ) { }

    async create(consumidorDto: ConsumidorDto): Promise<Consumidor> {
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

    async delete(consumidorId: string): Promise<any> {
        return (await this._consumidorSchema.deleteOne({ _id: consumidorId })).deletedCount;
    }

    async update(id: string, consumidorDto: ConsumidorDto): Promise<Consumidor> {
        return this._consumidorSchema.updateOne({ _id: id }, consumidorDto);
    }
}