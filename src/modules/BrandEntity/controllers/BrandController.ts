import { Response, Request } from "express";
import CreateBrandService from "@modules/BrandEntity/services/CreateBrandService";
import ListBrandService from "@modules/BrandEntity/services/ListBrandService";
import UpdateBrandService from "@modules/BrandEntity/services/UpdateBrandService";
import DeleteBrandService from "@modules/BrandEntity/services/DeleteBrandService";

export default class BrandController {
    public async create(request: Request, response: Response): Promise<Response> {
        const createBrand = new CreateBrandService();
        const { ...data } = request.body;
    
        const user = await createBrand.execute({
          ...data
        })
        return response.json(user);
    }
    
    public async index(request: Request, response: Response): Promise<Response> {
        const listbrands = new ListBrandService();
    
        const brands = await listbrands.execute()
        return response.json(brands);
    }

    public async update(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const { ...data } = request.body
  
      const updateBrand = new UpdateBrandService();
  
      const brand = updateBrand.execute({
        id,
        ...data
      })
      return response.json(brand);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
      const { id } = request.params
      const deleteBrand = new DeleteBrandService();
      await deleteBrand.execute(id)
      return response.status(204).send();    
    }
}