import { Version } from "@prisma/client"
import { VersionRepository } from "@modules/VersionEntity/repositories/VersionRepository";

interface IRequest {
    name: string
    price: string
    model_id: string
}

export default class CreateVersionService {
    async execute(data: IRequest): Promise<Version> {
        const versionRepository = new VersionRepository();
        const version = await versionRepository.create({
            name: data.name,
            price: data.price,
            model_id: data.model_id
        })
        await versionRepository.save(version);
        return version;
    }
}