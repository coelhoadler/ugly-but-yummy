import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedor.schema';
import { FornecedorDto } from './fornecedor.dto';
import { SlackService } from './../shared/services/slack.service';
import { ObjectID } from "mongodb";

@Injectable()
export class FornecedorService {
    constructor(
        @InjectModel(Fornecedor.name) private _fornecedorSchema: Model<FornecedorDocument>,
        private _slackService: SlackService
    ) { }

    async create(fornecedorDto: FornecedorDto): Promise<Fornecedor> {
        const _id = new ObjectID().toHexString();
        fornecedorDto._id = _id;
        fornecedorDto.uid = new Date().getTime() + '';

        this._slackService.postMessage(fornecedorDto);
        const schema = new this._fornecedorSchema(fornecedorDto);
        return schema.save();
    }

    async findBy(prop: string, propValue: string): Promise<Fornecedor[]> {
        let findBy = {};
        findBy[prop] = propValue;
        return this._fornecedorSchema.find(findBy).exec();
    }

    async findById(fornecedorId: string): Promise<Fornecedor> {
        return this._fornecedorSchema.findById(fornecedorId).exec();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this._fornecedorSchema.find().exec();
    }

    async delete(fornecedorId: string): Promise<any> {
        return (await this._fornecedorSchema.deleteOne({ _id: fornecedorId })).deletedCount;
    }

    async update(id: string, fornecedorDto: FornecedorDto): Promise<Fornecedor> {
        return this._fornecedorSchema.updateOne({ _id: id }, fornecedorDto);
    }
}
