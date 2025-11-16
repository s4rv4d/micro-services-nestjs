import { Module } from '@nestjs/common';
import { RiderCoordController } from './rider-coord.controller';
import { RiderCoordService } from './rider-coord.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordSchema, Ridercoord } from './schema/rider-coord.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ridercoord.name,
        schema: RiderCoordSchema,
      },
    ]),
  ],
  controllers: [RiderCoordController],
  providers: [RiderCoordService],
})
export class RiderCoordModule {}
