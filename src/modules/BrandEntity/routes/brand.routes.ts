import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import BrandController from "@modules/BrandEntity/controllers/BrandController"

const brandRouter = Router();
const brandController = new BrandController();

brandRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    country: Joi.string().required(),
    year: Joi.number().required(),
    headquarter: Joi.string().required(),
    website: Joi.string().required()
  }
}), brandController.create);

brandRouter.get('/', brandController.index);

brandRouter.put('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  },
  [Segments.BODY]: {
    name: Joi.string(),
    country: Joi.string(),
    year: Joi.number(),
    headquarter: Joi.string(),
    website: Joi.string()
  }
}), brandController.update)

brandRouter.delete('/:id',
celebrate({ 
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}), brandController.delete); 


export default brandRouter;