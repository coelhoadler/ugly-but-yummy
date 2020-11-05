import * as mongoose from "mongoose";

export interface Endereco extends mongoose.Document {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    cidade: string;
    uf: string;
}

export interface IConsumidor extends mongoose.Document {
    uid: String;
    nome: String;
    doc: String;
    endereco: Endereco;
    telefone: String,
    email: String;
}

const ConsumidorSchema = new mongoose.Schema({
    uid: { type: String },
    nome: { type: String, required: true },
    doc: { type: String, required: true },
    endereco: {
        cep: { type: String, required: true },
        rua: { type: String, required: true },
        numero: { type: String, required: true },
        complemento: { type: String, required: true },
        cidade: { type: String, required: true },
        uf: { type: String, required: true },
    },
    telefone: { type: String, required: true },
    email: { type: String, required: true },
});

export default mongoose.model<IConsumidor>('Consumidor', ConsumidorSchema);