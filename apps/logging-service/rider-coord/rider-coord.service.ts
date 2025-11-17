/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRiderCoordDto } from './dto/createRiderCoord.dto';
import { Ridercoord } from './schema/rider-coord.schema';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordService {
  constructor(
    @InjectModel(Ridercoord.name)
    private readonly riderModel: Model<Ridercoord>,
    @Inject('RIDER_SERVICE') private readonly riderClient: ClientProxy,
  ) {}

  async saveRiderCoordinates(createRiderCoordDto: CreateRiderCoordDto) {
    return await this.riderModel.create(createRiderCoordDto);
  }

  async getRiderCoordinates(riderId: string) {
    const coordinates = await this.riderModel.find({
      rider: riderId,
    });
    const pattern = { cmd: 'get-rider-by-id' };
    const payload = { id: riderId };

    const riderInfo = await firstValueFrom(
      this.riderClient.send(pattern, payload),
    );
    return {
      riderInfo,
      coordinates,
    };
  }
}
