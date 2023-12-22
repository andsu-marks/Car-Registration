import { BrandRepository } from "@modules/BrandEntity/repositories/BrandRepository";

export default class DeleteBrandService {
  async execute(id: string): Promise<void>{
    const brandRepository = new BrandRepository();
    
    await brandRepository.delete(id)
  }
}