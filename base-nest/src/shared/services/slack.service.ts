import { Injectable } from '@nestjs/common';
import { WebClient } from "@slack/web-api";
import * as dotenv from  'dotenv';
import { FornecedorDto } from '../../fornecedor/fornecedor.dto';

@Injectable()
export class SlackService {

    readonly SLACK_TOKEN: string;
    readonly CHANNEL_ID: string;

    constructor() { 
        dotenv.config();
        
        this.SLACK_TOKEN = process.env.SLACK_TOKEN || 'teste 1';
        this.CHANNEL_ID = process.env.CHANNEL_ID || 'teste 2';
    }

    async postMessage(forncedor: FornecedorDto): Promise<any> {
        try {
            const web = new WebClient(this.SLACK_TOKEN);        
   
            const result = await web.chat.postMessage({
                text: `
💥  Um fornecedor foi cadastrado com as seguintes informações: \n\n
🚛  Nome Completo: ${forncedor.nome} ${forncedor.sobrenome} \n
⏰  Data de criação: ${new Date().toLocaleDateString()} às ${new Date().toLocaleTimeString()}
                `,
                channel: this.CHANNEL_ID,
            });

            console.log(`Successfully send message ${result.ts} in conversation ${this.CHANNEL_ID}`);
    
        } catch ($x) {
            console.log(`Error: ${$x}`)
        }        
    }

}
