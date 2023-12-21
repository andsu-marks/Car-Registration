import { Response, Request } from "express";
import CreateModelService from "@service/CreateModelService";
import ListModelService from "@service/ListModelService";
import UpdateModelService from "@service/UpdateModelService";
import DeleteModelService from "@service/DeleteModelService";

export class ModelController {
    public async create(request: Request, response: Response): Promise<Response> {
        const createModel = new CreateModelService();
        const { ...data } = request.body;
    
        const model = await createModel.execute({
          ...data
        })
        return response.json(model);
    }

    public async index(request: Request, response: Response): Promise<Response> {
      const listModels = new ListModelService();
  
      const models = await listModels.execute()
      return response.json(models);
    }

    public async update(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const { ...data } = request.body
  
      const updateModel = new UpdateModelService();
  
      const model = updateModel.execute({
        id,
        ...data
      })
      return response.json(model);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const deleteModel = new DeleteModelService();
      await deleteModel.execute(id)
      return response.status(204).send();
    }
}