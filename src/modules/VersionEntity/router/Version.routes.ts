import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { VersionController } from "@/controller/VersionController";

const versionRouter = Router();
const versionController = new VersionController();

versionRouter.post('/',
celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.string().required(),
        features: Joi.string().required(),
        performance: Joi.string().required(),
        model_id: Joi.string().required().uuid()
    }
}), versionController.create)

versionRouter.get('/', versionController.index);

versionRouter.put('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.string().required(),
        features: Joi.string().required(),
        performance: Joi.string().required(),
        model_id: Joi.string().required().uuid(),
    }
}), versionController.update)

versionRouter.delete('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}), versionController.delete);

export default versionRouter;