import { Module } from '@nestjs/common';
import { RiderCoordController } from './rider-coord.controller';
import { RiderCoordService } from './rider-coord.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordSchema, Ridercoord } from './schema/rider-coord.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Ridercoord.name,
        schema: RiderCoordSchema,
      },
    ]),
    ClientsModule.register([
      {
        name: 'RIDER_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [RiderCoordController],
  providers: [RiderCoordService],
})
export class RiderCoordModule {}
