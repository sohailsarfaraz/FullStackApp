import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}
  @Post()
  addCar(
    @Body('id') carId: number,
    @Body('brand') carBrand: string,
    @Body('color') carColor: string,
    @Body('model') carModel: string,
    @Body('vin') carVin: string,
  ) {
    const generatedCar = this.carService.postCar({
      id: carId,
      brand: carBrand,
      color: carColor,
      model: carModel,
      vin: carVin,
    });
    console.log('generatedId', generatedCar);
    return { generatedCar };
  }
  @Get()
  getAllProducts() {
    return this.carService.getCars();
  }
  @Get(':id')
  getProduct(@Param('id') carId: number) {
    return this.carService.getCarById(carId);
  }
  @Patch(':id')
  updateProduct(
    @Param('id') carId: number,
    @Body('property_name') propertyName: string,
    @Body('property_value') propertyValue: string,
  ) {
    this.carService.putCarById(carId, propertyName, propertyValue);
    return null;
  }
  @Delete(':id')
  removeProduct(@Param('id') carId: number) {
    this.carService.deleteCarById(carId);
    return null;
  }
}
