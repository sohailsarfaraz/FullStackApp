import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './car.dto';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}

  public async getCars(): Promise<CarDto[]> {
    const cars = await this.carModel.find().exec();
    if (!cars || !cars[0]) {
      throw new HttpException('Not Found', 404);
    }
    return cars;
  }
  public async postCar(newCar: CarDto) {
    const car = await new this.carModel(newCar);
    return car.save();
  }
  public async getCarById(id: number): Promise<CarDto> {
    const car = await this.carModel.findOne({ id }).exec();
    console.log('car', car);
    if (!car) {
      throw new HttpException('Not Found', 404);
    }
    return car;
  }
  public async deleteCarById(id: number): Promise<any> {
    const car = await this.carModel.deleteOne({ id }).exec();
    if (car.deletedCount === 0) {
      throw new HttpException('Not Found', 404);
    }
    return car;
  }
  public async putCarById(
    id: number,
    propertyName: string,
    propertyValue: string,
  ): Promise<CarDto> {
    const car = await this.carModel
      .findOneAndUpdate({ id }, { [propertyName]: propertyValue })
      .exec();
    if (!car) {
      throw new HttpException('Not Found', 404);
    }
    return car;
  }
}
