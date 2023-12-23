import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { ModelController } from "@modules/ModelEntity/controllers/modelController";

const modelRouter = Router();
const modelController = new ModelController();

modelRouter.post('/',
celebrate({
    [Segments.BODY]: {
        name:Joi.string().required(),
        base_price: Joi.string().required(),
        type: Joi.string().required(),
        engine: Joi.string().required(),
        fuel_type: Joi.string().required(),
        year: Joi.number().required(),
        brand_id: Joi.string().required().uuid(),
    }
}), modelController.create)

modelRouter.get('/', modelController.index);

modelRouter.put('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  },
  [Segments.BODY]: {
    name:Joi.string().required(),
    base_price: Joi.string().required(),
    type: Joi.string().required(),
    engine: Joi.string().required(),
    fuel_type: Joi.string().required(),
    year: Joi.number().required(),
    brand_id: Joi.string().required().uuid(),
  }
}), modelController.update)

modelRouter.delete('/:id',
celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required()
  }
}), modelController.delete);

export default modelRouter;