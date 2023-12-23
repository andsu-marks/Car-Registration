import { Prisma, Brand } from '@prisma/client';
import prisma from '@utils/prisma';

interface IRequest {
    id?: string
    name: string
    country: string
    year: number
    headquarter: string
    website: string
}

export class BrandRepository {
    async create(data: IRequest) {
        const createBrand = await prisma.brand.create({
            data: {
                id: data.id,
                name: data.name,
                country: data.country,
                year: data.year,
                headquarter: data.headquarter,
                website: data.website
            }
        })

        return createBrand;
    }

    async find() {
        const brands = prisma.brand.findMany();
        return brands;
    }

    async save(brand: Prisma.BrandUpdateInput): Promise<Brand | undefined> {
        const updateBrand = await prisma.brand.update({
            where: {
                id: (brand.id as string)
            },
            data: brand
        })

        return updateBrand
    }

    async delete(id: string) {
        await prisma.brand.delete({
            where: {
                id: id
            }
        })
    }
}