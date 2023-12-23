import { BrandRepository } from "@modules/BrandEntity/repositories/BrandRepository";
import { Brand} from "@prisma/client";

interface IRequest {
    name: string
    country: string
    year: number
    headquarter: string
    website: string
}

export default class CreateBrandService {
    async execute(data: IRequest): Promise<Brand> {
        const brandRepository = new BrandRepository();

        const brand = await brandRepository.create({
            name: data.name,
            country: data.country,
            year: data.year,
            headquarter: data.headquarter,
            website: data.website
        })

        await brandRepository.save(brand);
        return brand;
    }
}