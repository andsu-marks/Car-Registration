import { BrandRepository } from "@modules/BrandEntity/repositories/BrandRepository";

export default class ListBrandService {
  async execute() {
    const brandRepository = new BrandRepository();
    const brands = await brandRepository.find();
    return brands;
  }
}