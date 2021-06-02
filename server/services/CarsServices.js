import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CarsService {

  async getCars() {
    let cars = await dbContext.Cars.find({})
    return cars
  }
  async createCar(carData) {
    let car = await dbContext.Cars.create(carData)
    return car
  }
  async updateCar(id, carData) {
    let car = await dbContext.Cars.findByIdAndUpdate(id, carData, { new: true, runValidators: true })
    return car
  }
  async deleteCar(id) {
    let car = await dbContext.Cars.findByIdAndDelete(id)
    return car
  }
}

export const carsService = new CarsService();
