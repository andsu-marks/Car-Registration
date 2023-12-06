import { BrandRepository } from "../repository/BrandRepository";
import { Brand} from "@prisma/client";

interface IRequest {
    name: string
    country: string
    founded_in: string
    headquarter: string
    website: string
}

export default class CreateBrandService {
    async execute(data: IRequest): Promise<Brand> {
        const brandRepository = new BrandRepository();
        // const brandExist = await brandRepository.find();

        const brand = await brandRepository.create({
            name: data.name,
            country: data.country,
            founded_in: data.founded_in,
            headquarter: data.headquarter,
            website: data.website
        })

        await brandRepository.save(brand);
        return brand;
    }
}