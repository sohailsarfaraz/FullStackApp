import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CarModule } from './car/car.module';

@Module({
  imports: [
    ProductModule,
    CarModule,
    MongooseModule.forRoot('mongodb://localhost/car_manager'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
