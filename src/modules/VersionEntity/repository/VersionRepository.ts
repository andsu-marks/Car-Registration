import { Prisma, Version } from "@prisma/client"
import prisma from "../../../utils/prisma"

interface IRequest {
    id?: string
    name: string
    price: string
    features: string
    model_id: string
}

export class VersionRepository {

    async create(data: IRequest) {
        const createVersion = await prisma.version.create({
            data: {
                name: data.name,
                price: data.price,
                features: data.features,
                model: {
                    connect: {
                        id: data.model_id
                    }
                }
            }
        })
        return createVersion;
    }

    async save(version: Prisma.VersionUpdateInput): Promise<Version | undefined> {
        const updatedVersion = await prisma.version.update({
          where: {
            id: (version.id as string)
          },
          data: version
        })
        return updatedVersion;
    }

    async find() {
        const versions = prisma.version.findMany();
        return versions;
    }

    async delete(id: string) {
        await prisma.version.delete({
            where: {
                id: id
            }
        })
    }
}