import { Prisma, Brand } from "@prisma/client";
import { BrandRepository } from "@repository/BrandRepository";

export default class UpdateBrandService {
  async execute(data: Prisma.BrandUpdateInput): Promise<Brand | undefined> {
    const brandRepository = new BrandRepository();

    const brand = await brandRepository.save({
      ...data
    })

    return brand;
  }
} 