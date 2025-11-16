import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRiderCoordDto } from './dto/createRiderCoord.dto';
import { Ridercoord } from './schema/rider-coord.schema';

@Injectable()
export class RiderCoordService {
  constructor(
    @InjectModel(Ridercoord.name)
    private readonly riderModel: Model<Ridercoord>,
  ) {}

  async saveRiderCoordinates(createRiderCoordDto: CreateRiderCoordDto) {
    return await this.riderModel.create(createRiderCoordDto);
  }
}
