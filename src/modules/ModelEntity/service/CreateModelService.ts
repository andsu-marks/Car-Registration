import { Model } from "@prisma/client"
import { ModelRepository } from "../repository/ModelRepository"

interface IRequest {
    name: string
    base_price: string
    type: string
    engine: string
    fuel_type: string
    year: string
    brand_id: string
}

export default class CreateBrandService {
    async execute(data: IRequest): Promise<Model> {
        const modelRepository = new ModelRepository();
        // const brandExist = await brandRepository.find();

        const model = await modelRepository.create({
            name: data.name,
            base_price: data.base_price,
            type: data.type,
            engine: data.engine,
            fuel_type: data.fuel_type,
            year: data.year,
            brand_id: data.brand_id
        })

        await modelRepository.save(model);
        return model;
    }
}