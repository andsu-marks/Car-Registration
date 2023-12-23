import { Prisma, Model } from "@prisma/client";
import { ModelRepository } from "@modules/ModelEntity/repositories/ModelRepository";

export default class UpdateModelService {
  async execute(data: Prisma.ModelCreateInput): Promise<Model| undefined> {
    const modelRepository = new ModelRepository();

    const model = await modelRepository.save({
      ...data
    })

    return model;
  }
} 