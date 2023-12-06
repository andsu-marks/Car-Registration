import { BrandRepository } from "../repository/BrandRepository";

export default class ListBrandService {
  async execute() {
    const brandRepository = new BrandRepository();
    const brands = await brandRepository.find();
    return brands;
  }
}