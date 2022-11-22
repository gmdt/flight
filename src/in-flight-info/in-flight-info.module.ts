import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InFlightInfoController } from './in-flight-info.controller';
import { InFlightInfoService } from './in-flight-info.service';
import {
  InFlightInfo,
  InFlightInfoSchema,
} from './schemas/in-flight-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: InFlightInfo.name, schema: InFlightInfoSchema },
    ]),
  ],
  exports: [InFlightInfoService],
  providers: [InFlightInfoService],
  controllers: [InFlightInfoController],
})
export class InFlightInfoModule {}
