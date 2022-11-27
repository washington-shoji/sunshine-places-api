import express from 'express';
import { SydneySuburbPolygonLayerController } from '../controllers/sydneySuburbPolygon.controller';

export const sydneySuburbPolygonLayerRouter = express.Router();

sydneySuburbPolygonLayerRouter.get('/polygon/suburb', SydneySuburbPolygonLayerController.findSydneyPolygonLayerBySuburb);
sydneySuburbPolygonLayerRouter.get('/polygon/postcode', SydneySuburbPolygonLayerController.findSydneyPolygonLayerByPostcode);
