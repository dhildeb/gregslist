import { dbContext } from "../db/DbContext"


class HousesService {

  async getHouses() {
    let houses = await dbContext.House.find({})
    return houses
  }

  async createHouse(houseData) {
    let house = await dbContext.House.create(houseData)
    return house
  }

  async editHouse(id, houseData) {
    let house = await dbContext.House.findByIdAndUpdate(id, houseData, { new: true, runValidators: true })
    return house
  }

  async deleteHouse(id) {
    let house = await dbContext.House.findByIdAndDelete(id)
    return house
  }
}

export const housesService = new HousesService()