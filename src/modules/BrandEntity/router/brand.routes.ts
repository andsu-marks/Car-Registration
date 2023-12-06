import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { BrandController } from "../controller/BrandController";

const brandRouter = Router();
const brandController = new BrandController();

brandRouter.post('/',
celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    country: Joi.string().required(),
    founded_in: Joi.string().required(),
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
    founded_in: Joi.string(),
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