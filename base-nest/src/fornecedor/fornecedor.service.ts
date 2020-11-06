import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedor.schema';
import { FornecedorDto } from './fornecedor.dto';
import { SlackService } from 'src/shared/services/slack.service';

@Injectable()
export class FornecedorService {
    constructor(
        @InjectModel(Fornecedor.name) private _fornecedorSchema: Model<FornecedorDocument>,
        private _slackService: SlackService
    ) { }

    async create(fornecedorDto: FornecedorDto): Promise<Fornecedor> {
        this._slackService.postMessage(fornecedorDto);
        const schema = new this._fornecedorSchema(fornecedorDto);
        return schema.save();
    }

    async findOne(filters): Promise<Fornecedor> {
        return this._fornecedorSchema.findOne(filters).exec();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this._fornecedorSchema.find().exec();
    }

    async update(fornecedorDto: FornecedorDto, fornecedorId): Promise<Fornecedor> {
        return this._fornecedorSchema.updateOne({'_id': fornecedorId } , fornecedorDto).exec();
    }

    async delete(fornecedorId: IDBDatabase): Promise<any> {
        return this._fornecedorSchema.deleteOne({_id: fornecedorId})
    }

}
