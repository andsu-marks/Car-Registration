import { ModelRepository } from "@modules/ModelEntity/repositories/ModelRepository";

export default class DeleteModelService {
  async execute(id: string): Promise<void>{
    const modelRepository = new ModelRepository();
    
    await modelRepository.delete(id);
  }
}