import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Produto, ProdutoDocument } from './produto.schema';
import { ProdutoDto } from './produto.dto';

@Injectable()
export class ProdutoService {
    constructor(
        @InjectModel(Produto.name) private _produtoSchema: Model<ProdutoDocument>
    ) { }

    async create(produtoDto: ProdutoDto): Promise<Produto> {
        const schema = new this._produtoSchema(produtoDto);
        return schema.save();
    }

    async findBy(prop: string, propValue: string): Promise<Produto[]> {
        let findBy = {};
        findBy[prop] = propValue;
        return this._produtoSchema.find(findBy).exec();
    }

    async findById(produtoId: string): Promise<Produto> {
        return this._produtoSchema.findById(produtoId).exec();
    }

    async findAll(): Promise<Produto[]> {
        return this._produtoSchema.find().exec();
    }

    async delete(produtoId: string): Promise<any> {
        return (await this._produtoSchema.deleteOne({ _id: produtoId })).deletedCount;
    }

    async update(id: string, produtoDto: ProdutoDto): Promise<Produto> {
        return this._produtoSchema.updateOne({ _id: id }, produtoDto);
    }
}
