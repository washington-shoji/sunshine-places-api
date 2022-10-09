import express from 'express';
import { createPlaceController, deletePlaceByIdController, getAllPlacesController, updatePlaceByIdController } from '../controllers/place.controller';

export const placeRouter = express.Router();

placeRouter.post('/place/', createPlaceController);
placeRouter.get('/place/', getAllPlacesController);
placeRouter.patch('/place/:placeId', updatePlaceByIdController);
placeRouter.delete('/place/:placeId', deletePlaceByIdController);
