import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();
  });

  describe('findAll', () => {
    it('should be empty at start', async () => {
      const catsController = app.get<CatsController>(CatsController);
      expect(await catsController.findAll()).toHaveLength(0);
    });
  });
});
