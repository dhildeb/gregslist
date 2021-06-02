import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";


export class HousesController extends BaseController {
  constructor() {
    super("/api/houses")
    this.router
      .get("", this.getHouses)
      .post("", this.createHouse)
      .put("/:id", this.editHouse)
      .delete("/:id", this.deleteHouse)
  }
  async getHouses(req, res, next) {
    try {
      let houses = await housesService.getHouses()
      return res.send(houses)
    } catch (error) {
      next(error)
    }
  }
  async createHouse(req, res, next) {
    try {
      let house = await housesService.createHouse(req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async editHouse(req, res, next) {
    try {
      let houseId = req.params.id
      let house = await housesService.editHouse(houseId, req.body)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
  async deleteHouse(req, res, next) {
    try {
      let house = await housesService.deleteHouse(req.params.id)
      return res.send(house)
    } catch (error) {
      next(error)
    }
  }
}