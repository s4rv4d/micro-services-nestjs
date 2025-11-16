import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordModule } from '../rider-coord/rider-coord.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/logs_db'),
    RiderCoordModule,
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
