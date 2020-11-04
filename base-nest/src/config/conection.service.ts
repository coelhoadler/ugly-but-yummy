import { Injectable } from "@nestjs/common";
import * as mongoose from 'mongoose';

@Injectable()
export class ConnectionService {

    readonly conn: any;

    constructor() {
        this.conn = mongoose.connect(
            'mongodb+srv://w1gA77GNyv0gBlum:uglybutyummy123@cluster0.sdiq5.mongodb.net/uglybutyummy?retryWrites=true&w=majority', {
            useNewUrlParser: true
        });
    }

    get connection(): Promise<any> {
        return this.conn;
    }

}