import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsService', () => {
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [CatsController],
            providers: [CatsService],
        }).compile();
    });

    describe('findAll', () => {
        it('should be empty at start', () => {
            const catsService = app.get<CatsService>(CatsService);
            expect(catsService.findAll()).toHaveLength(0);
        });
    });
});
