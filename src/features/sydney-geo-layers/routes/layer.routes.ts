import express from 'express';
import { SydneyLayerController } from '../controllers/sydneyLayer.controller';

export const sydneyLayerRouter = express.Router();

sydneyLayerRouter.post('/layer/', SydneyLayerController.createSydneyLayer);
sydneyLayerRouter.get('/layer/', SydneyLayerController.findSydneyLayer);
sydneyLayerRouter.get('/layer/suburb', SydneyLayerController.findSydneyLayerBySuburb);
