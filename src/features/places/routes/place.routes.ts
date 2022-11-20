import express from 'express';
import { ValidateSchema } from '../../../middleware/ValidateSchema';
import { PlaceController } from '../controllers/place.controller';
import { Schemas } from '../validation-schema/schema.validation';

export const placeRouter = express.Router();

placeRouter.post('/place/', ValidateSchema(Schemas.place.create), PlaceController.createPlace);
placeRouter.get('/place/', PlaceController.getAllPlaces);
placeRouter.patch('/place/:placeId', ValidateSchema(Schemas.place.update), PlaceController.updatePlaceById);
placeRouter.delete('/place/:placeId', PlaceController.deletePlaceById);
