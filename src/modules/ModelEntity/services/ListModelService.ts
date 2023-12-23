import { ModelRepository } from "@modules/ModelEntity/repositories/ModelRepository";

export default class ListModelService {
  async execute() {
    const modelRepository = new ModelRepository();
    const models = await modelRepository.find();
    return models;
  }
}