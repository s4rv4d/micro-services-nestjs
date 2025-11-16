import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CreateRiderCoordDto } from './dto/createRiderCoord.dto';

@Controller('rider-coord')
export class RiderCoordController {
  @Get()
  getRiderCoordinates() {
    return { lat: 40.7128, lon: -74.006 }; // Example coordinates
  }

  @Post()
  saveRiderCoordinates(
    @Body(ValidationPipe)
    createRiderCoordDto: CreateRiderCoordDto,
  ) {
    return createRiderCoordDto;
  }
}
