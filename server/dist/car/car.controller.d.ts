/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CarService } from './car.service';
export declare class CarController {
    private readonly carService;
    constructor(carService: CarService);
    addCar(carId: number, carBrand: string, carColor: string, carModel: string, carVin: string): {
        generatedCar: Promise<import("mongoose").Document<unknown, {}, import("./interfaces/car.interface").ICar> & Omit<import("./interfaces/car.interface").ICar & {
            _id: import("mongoose").Types.ObjectId;
        }, never>>;
    };
    getAllProducts(): Promise<import("./car.dto").CarDto[]>;
    getProduct(carId: number): Promise<import("./car.dto").CarDto>;
    updateProduct(carId: number, propertyName: string, propertyValue: string): any;
    removeProduct(carId: number): any;
}
