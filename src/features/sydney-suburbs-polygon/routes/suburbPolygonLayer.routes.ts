import express from 'express';
import { SydneyPolygonLayerController } from '../controllers/suburbPolygon.controller';

export const sydneyPolygonLayerRouter = express.Router();

sydneyPolygonLayerRouter.get('/polygon/suburb', SydneyPolygonLayerController.findAllPolygonLayer);
sydneyPolygonLayerRouter.get('/polygon/near', SydneyPolygonLayerController.findNearPolygonLayer);
sydneyPolygonLayerRouter.get('/polygon/suburb-name', SydneyPolygonLayerController.findPolygonLayerBySuburb);
sydneyPolygonLayerRouter.get('/polygon/postcode', SydneyPolygonLayerController.findPolygonLayerByPostcode);
