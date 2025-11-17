import {
  Controller,
  Get,
  Post,
  Body,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { CreateRiderCoordDto } from './dto/createRiderCoord.dto';
import { RiderCoordService } from './rider-coord.service';

@Controller('rider-coord')
export class RiderCoordController {
  constructor(private readonly riderCoordService: RiderCoordService) {}

  @Get(':id')
  getRiderCoordinates(@Param('id') id: string) {
    return this.riderCoordService.getRiderCoordinates(id);
  }

  @Post()
  saveRiderCoordinates(
    @Body(ValidationPipe)
    createRiderCoordDto: CreateRiderCoordDto,
  ) {
    return this.riderCoordService.saveRiderCoordinates(createRiderCoordDto);
  }
}
