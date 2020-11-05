import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedorSchema';
import { FornecedorDto } from './fornecedor.dto';

@Injectable()
export class FornecedorService {
    constructor(
        @InjectModel(Fornecedor.name) private _fornecedorModel: Model<FornecedorDocument>
    ) { }

    async create(fornecedorDto: FornecedorDto): Promise<Fornecedor> {
        const newFornecedor = new this._fornecedorModel(fornecedorDto);
        return newFornecedor.save();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this._fornecedorModel.find().exec();
    }

    async delete(fornecedorId: IDBDatabase): Promise<any> {
        return this._fornecedorModel.deleteOne(fornecedorId)
    }
}
