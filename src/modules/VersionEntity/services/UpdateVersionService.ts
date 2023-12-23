import { Prisma, Version } from "@prisma/client";
import { VersionRepository } from "@modules/VersionEntity/repositories/VersionRepository";

export default class UpdateVersionService {
    async execute(data: Prisma.VersionCreateInput): Promise<Version| undefined> {
      const versionRepository = new VersionRepository();
  
      const version = await versionRepository.save({
        ...data
      })
  
      return version;
    }
  } 