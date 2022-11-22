import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CabinDetailController } from './cabin-detail.controller';
import { CabinDetailService } from './cabin-detail.service';
import { CabinDetail, CabinDetailSchema } from './schemas/cabin-detail.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CabinDetail.name, schema: CabinDetailSchema },
    ]),
  ],
  exports: [CabinDetailService],
  providers: [CabinDetailService],
  controllers: [CabinDetailController],
})
export class CabinDetailModule {}
