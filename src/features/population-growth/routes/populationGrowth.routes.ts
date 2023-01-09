import express from 'express';
import { PopulationGrowthController } from '../controller/populationGrowth.controller';

export const populationGrowthRouter = express.Router();

populationGrowthRouter.get('/population', PopulationGrowthController.findAllSuburbGrowth);
