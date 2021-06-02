import { carsService } from "../services/CarsServices";
import BaseController from "../utils/BaseController";

export class CarsController extends BaseController {
  constructor() {
    super("api/cars")
    this.router
      .get("", this.getCars)
      .post("", this.createCar)
      .put("/:id", this.updateCar)
      .delete("/:id", this.deleteCar)
  }

  async getCars(req, res, next) {
    try {
      let cars = await carsService.getCars()
      return res.send(cars)
    } catch (error) {
      next(error)
    }
  }
  async createCar(req, res, next) {
    try {
      let car = await carsService.createCar(req.body)
      return res.send(car)

    } catch (error) {
      next(error)
    }
  }
  async updateCar(req, res, next) {
    try {
      let id = req.params.id
      let car = await carsService.updateCar(id, req.body)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }
  async deleteCar(req, res, next) {
    try {
      let car = await carsService.deleteCar(req.params.id)
      return res.send(car)
    } catch (error) {
      next(error)
    }
  }
}