import { Connection, Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Fornecedor, FornecedorDocument } from './fornecedorSchema';
import { CreateFornecedorDto } from '../../dto/create-fornecedor.dto';

@Injectable()
export class FornecedorService {
    constructor(
        @InjectConnection('fornecedor') private connection: Connection,
        @InjectModel(Fornecedor.name) private _fornecedorModel: Model<FornecedorDocument>
    ) { }

    async create(CreateFornecedorDto: CreateFornecedorDto): Promise<Fornecedor> {
        const createdFornecedor = new this._fornecedorModel(CreateFornecedorDto);
        createdFornecedor.name = "Adler";
        createdFornecedor.name = "Coelho Santos";

        return createdFornecedor.save();
    }

    async findAll(): Promise<Fornecedor[]> {
        return this._fornecedorModel.find().exec();
    }
}
