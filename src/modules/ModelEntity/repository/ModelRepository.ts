import { Model, Prisma } from "@prisma/client";
import prisma from "../../../utils/prisma";

interface IRequest {
    id?: string;
    name: string;
    base_price: string;
    type: string;
    engine: string;
    fuel_type: string;
    performance: string;
    year: string;
    brand_id: string
}

export class ModelRepository {

    async create(data: IRequest) {
        const createModel = await prisma.model.create({
            data: {
                name: data.name,
                base_price: data.base_price,
                type: data.type,
                engine: data.engine,
                fuel_type: data.fuel_type,
                performance: data.performance,
                year: data.year,

                // brand_id: data.brand_id

                brand: {
                    connect: {
                        id: data.brand_id
                    }
                }


            }
        })

        return createModel;
    }

    async save(model: Prisma.ModelUpdateInput): Promise<Model | undefined> {
        const updatedModel = await prisma.model.update({
          where: {
            id: (model.id as string)
          },
          data: model,
        })
        return updatedModel;
    }

    async find() {
        const models = prisma.model.findMany();
        return models;
    }

    async delete(id: string) {
        await prisma.model.delete({
            where: {
                id: id
            }
        })
    }
}