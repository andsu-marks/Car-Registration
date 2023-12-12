import { Response, Request } from "express";
import CreateVersionService from "../service/CreateVersionService";
import ListVersionService from "../service/ListVersionService";
import UpdateVersionService from "../service/UpdateVersionService";
import DeleteVersionService from "../service/DeleteVersionService";

export class VersionController {
    public async create(request: Request, response: Response): Promise<Response> {
        const createVersion = new CreateVersionService();
        const { ...data } = request.body;
    
        const version = await createVersion.execute({
          ...data
        })
        return response.json(version);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const listVersions = new ListVersionService();
    
        const versions = await listVersions.execute()
        return response.json(versions);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const { ...data } = request.body
    
        const updateVersion = new UpdateVersionService();
    
        const version = updateVersion.execute({
          id,
          ...data
        })
        return response.json(version);
      }

      public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const deleteVersion = new DeleteVersionService();
        await deleteVersion.execute(id)
        return response.json([])
      }
}