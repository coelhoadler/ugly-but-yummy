import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedor.schema';
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

    async findOne(filters): Promise<Fornecedor> {
        return this.fornecedorSchema.findOne(filters).exec();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this.fornecedorSchema.find().exec();
    }

    async update(fornecedorDto: FornecedorDto, fornecedorId): Promise<Fornecedor> {
        return this.fornecedorSchema.updateOne({'_id': fornecedorId } , fornecedorDto).exec();
    }

    async delete(fornecedorId: IDBDatabase): Promise<any> {
        return this.fornecedorSchema.deleteOne({_id: fornecedorId})
    }

}
