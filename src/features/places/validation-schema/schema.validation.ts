import Joi from 'joi';
import { IPlace } from '../interface/place.interface';

export const Schemas = {
    place: {
        create: Joi.object<IPlace>({
            name: Joi.string().required(),
            country: Joi.string().required(),
            sunshineHours: Joi.number().required(),
            image: Joi.string().required(),
            description: Joi.string().required()
        }),
        update: Joi.object<IPlace>({
            name: Joi.string().required(),
            country: Joi.string().required(),
            sunshineHours: Joi.number().required(),
            image: Joi.string().required(),
            description: Joi.string().required()
        })
    }
};
