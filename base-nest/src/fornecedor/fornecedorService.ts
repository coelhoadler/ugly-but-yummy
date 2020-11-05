import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedorSchema';
import { FornecedorDto } from './fornecedor.dto';

@Injectable()
export class FornecedorService {
    constructor(
        @InjectModel(Fornecedor.name) private fornecedorSchema: Model<FornecedorDocument>
    ) { }

    async create(fornecedorDto: FornecedorDto): Promise<Fornecedor> {
        const schema = new this.fornecedorSchema(fornecedorDto);
        return schema.save();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this.fornecedorSchema.find().exec();
    }

    async delete(fornecedorId: IDBDatabase): Promise<any> {
        return this.fornecedorSchema.deleteOne({_id: fornecedorId})
    }
}
