import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServiceService {
  getRiderById(id: string) {
    return Promise.resolve({
      _id: id,
      firstName: 'Sarvad',
      lastName: 'Shetty',
    });
  }
}
