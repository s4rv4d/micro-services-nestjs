import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordModule } from '../rider-coord/rider-coord.module';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL as string),
    RiderCoordModule,
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
