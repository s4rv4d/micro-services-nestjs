import { Controller, Get } from '@nestjs/common';

@Controller('rider-coord')
export class RiderCoordController {
  @Get()
  getRiderCoordinates() {
    return { lat: 40.7128, lon: -74.006 }; // Example coordinates
  }
}
