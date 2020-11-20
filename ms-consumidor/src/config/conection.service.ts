import { DynamicModule } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Consumidor, ConsumidorSchema } from '../consumidor/consumidor.schema';

export class ConnectionService {
    private static collectionName = 'consumidores';
   
    private static forRoot(dbName: string, collectionName: string = ConnectionService.collectionName): DynamicModule {
        return MongooseModule.forRoot(`mongodb+srv://startupabkm:3XU1tYrdyTH0dwvh@project01db.med08.mongodb.net/${dbName}?retryWrites=true&w=majority`,
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
            return ConnectionService.forFeature(Consumidor.name, ConsumidorSchema);
        }
    };

    public static Development = {
        forRoot(): DynamicModule {
            return ConnectionService.forRoot('uglybutyummy-dev');
        },
        forFeature(): DynamicModule {
            return ConnectionService.forFeature(Consumidor.name, ConsumidorSchema);
        }
    };

    public static Production = {
        forRoot(): DynamicModule {
            return ConnectionService.forRoot('uglybutyummy');
        },
        forFeature(): DynamicModule {
            return ConnectionService.forFeature(Consumidor.name, ConsumidorSchema);
        }
    };
}