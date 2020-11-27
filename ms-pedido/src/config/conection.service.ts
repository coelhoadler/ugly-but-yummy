import { DynamicModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Pedido, PedidoSchema } from '../pedido/pedido.schema';

export class ConnectionService {
    private static collectionName = 'pedidos';

   
    private static forRoot(dbName: string, collectionName: string = ConnectionService.collectionName): DynamicModule {
        return MongooseModule.forRoot(`mongodb+srv://abkmstartup:fiap@2020@cluster0.sgvlv.mongodb.net/${dbName}?retryWrites=true&w=majority`,
            { connectionName: collectionName, useNewUrlParser: true, useUnifiedTopology: true });
    };
    private static forFeature(name: any, schema: any, collectionName: string = ConnectionService.collectionName): DynamicModule {
        return MongooseModule.forFeature([{ name: name, schema: schema }], collectionName)
    }

    public static Tests = {
        forRoot(): DynamicModule {
            return ConnectionService.forRoot('uglybutyummy-teste');
        },
        forFeature(): DynamicModule {
            return ConnectionService.forFeature(Pedido.name, PedidoSchema);
        }
    };

    public static Development = {
        forRoot(): DynamicModule {
            return ConnectionService.forRoot('uglybutyummy-dev');
        },
        forFeature(): DynamicModule {
            return ConnectionService.forFeature(Pedido.name, PedidoSchema);
        }
    };

    public static Production = {
        forRoot(): DynamicModule {
            return ConnectionService.forRoot('uglybutyummy');
        },
        forFeature(): DynamicModule {
            return ConnectionService.forFeature(Pedido.name, PedidoSchema);
        }
    };
}