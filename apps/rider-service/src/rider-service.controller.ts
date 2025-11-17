import { Controller } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) {}

  @MessagePattern({ cmd: 'get-rider-by-id' })
  getRiderById(data: { id: string }) {
    return this.riderServiceService.getRiderById(data.id);
  }
}
