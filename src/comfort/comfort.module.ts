import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComfortController } from './comfort.controller';
import { ComfortService } from './comfort.service';
import { Comfort, ComfortSchema } from './schemas/comfort.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comfort.name, schema: ComfortSchema }]),
  ],
  exports: [ComfortService],
  providers: [ComfortService],
  controllers: [ComfortController],
})
export class ComfortModule {}
