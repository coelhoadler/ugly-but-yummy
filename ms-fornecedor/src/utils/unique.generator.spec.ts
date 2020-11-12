import { Test } from '@nestjs/testing';
import UniqueGenerator from './unique.generator';

describe('UniqueGenerator', () => {
    let uniqueGenerator: UniqueGenerator;

    beforeEach(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [UniqueGenerator], // Add
            controllers: [], // Add
            providers: [],   // Add
        }).compile();

        uniqueGenerator = moduleRef.get<UniqueGenerator>(UniqueGenerator);
    });

    it('Deve estar definido', () => {
        expect(uniqueGenerator).toBeDefined();
    });

    it('', () => {

    });
});
