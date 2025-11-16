import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordController } from './rider-coord.controller';

describe('RiderCoordController', () => {
  let controller: RiderCoordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RiderCoordController],
    }).compile();

    controller = module.get<RiderCoordController>(RiderCoordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
