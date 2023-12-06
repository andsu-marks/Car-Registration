import { BrandRepository } from "../repository/BrandRepository";
import AppError from "../../../error/appError";

export default class DeleteBrandService {
  async execute(id: string): Promise<void>{
    const brandRepository = new BrandRepository();
    
    await brandRepository.delete(id)
  }
}