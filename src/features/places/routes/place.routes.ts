import express from 'express';
import { ValidateSchema } from '../../../middleware/ValidateSchema';
import { createPlaceController, deletePlaceByIdController, getAllPlacesController, updatePlaceByIdController } from '../controllers/place.controller';
import { Schemas } from '../validation-schema/schema.validation';

export const placeRouter = express.Router();

placeRouter.post('/place/', ValidateSchema(Schemas.place.create), createPlaceController);
placeRouter.get('/place/', getAllPlacesController);
placeRouter.patch('/place/:placeId', ValidateSchema(Schemas.place.update), updatePlaceByIdController);
placeRouter.delete('/place/:placeId', deletePlaceByIdController);
