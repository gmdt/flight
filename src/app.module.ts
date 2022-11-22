import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookmarkModule } from './bookmark/bookmark.module';
import { CabinDetailModule } from './cabin-detail/cabin-detail.module';
import { ComfortModule } from './comfort/comfort.module';
import { CompanyModule } from './company/company.module';
import { FlightModule } from './flight/flight.module';
import { InFlightInfoModule } from './in-flight-info/in-flight-info.module';
const URI = 'mongodb://localhost/flightDB';
@Module({
  imports: [
    FlightModule,
    BookmarkModule,
    CabinDetailModule,
    ComfortModule,
    CompanyModule,
    InFlightInfoModule,
    MongooseModule.forRoot(URI),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
