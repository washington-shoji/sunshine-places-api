import express from 'express';
import { SuburbRiskZoneController } from './../controllers/suburbRiskZone.controller';

export const riskZoneRouter = express.Router();

riskZoneRouter.post('/riskzone', SuburbRiskZoneController.createRiskZone);
riskZoneRouter.get('/riskzone', SuburbRiskZoneController.findAllRiskZone);
riskZoneRouter.get('/riskzone/suburb', SuburbRiskZoneController.findRiskZoneBySuburb);
