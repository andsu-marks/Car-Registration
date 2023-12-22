import { VersionRepository } from "@modules/VersionEntity/repositories/VersionRepository";

export default class ListVersionService {
    async execute() {
      const versionRepository = new VersionRepository();
      const version = await versionRepository.find();
      return version;
    }
  }