import { Test, TestingModule } from '@nestjs/testing';
import { RiderCoordService } from './rider-coord.service';

describe('RiderCoordService', () => {
  let service: RiderCoordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RiderCoordService],
    }).compile();

    service = module.get<RiderCoordService>(RiderCoordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
