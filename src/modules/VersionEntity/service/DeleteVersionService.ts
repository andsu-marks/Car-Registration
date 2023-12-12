import { VersionRepository } from "../repository/VersionRepository";

export default class DeleteVersionService {
    async execute(id: string): Promise<void>{
      const versionRepository = new VersionRepository();
      
      await versionRepository.delete(id);
    }
  }