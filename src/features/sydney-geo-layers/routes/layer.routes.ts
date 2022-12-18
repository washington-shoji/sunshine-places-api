import express from 'express';
import { LayerController } from '../controllers/layer.controller';

export const layerRouter = express.Router();

layerRouter.post('/layer/', LayerController.createLayer);
layerRouter.get('/layer/', LayerController.findLayer);
layerRouter.get('/layer/suburb', LayerController.findLayerBySuburb);
