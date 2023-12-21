import { Version } from "@prisma/client"
import { VersionRepository } from "@repository/VersionRepository";

interface IRequest {
    name: string
    price: string
    features: string
    performance: string
    model_id: string
}

export default class CreateVersionService {
    async execute(data: IRequest): Promise<Version> {
        const versionRepository = new VersionRepository();
        const version = await versionRepository.create({
            name: data.name,
            price: data.price,
            features: data.features,
            performance: data.performance,
            model_id: data.model_id
        })
        await versionRepository.save(version);
        return version;
    }
}