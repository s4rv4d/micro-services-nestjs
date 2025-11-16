import { Module } from '@nestjs/common';
import { RiderCoordController } from './rider-coord.controller';
import { RiderCoordService } from './rider-coord.service';

@Module({
  controllers: [RiderCoordController],
  providers: [RiderCoordService]
})
export class RiderCoordModule {}
