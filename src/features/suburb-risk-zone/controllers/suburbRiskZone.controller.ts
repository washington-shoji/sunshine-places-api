import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { RiskZoneService } from './../service/suburbRiskZone.service';

async function createRiskZone(req: Request, res: Response, next: NextFunction) {
    const riskZoneObject = req.body;
    try {
        const result = await RiskZoneService.createRiskZone(riskZoneObject);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findAllRiskZone(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await RiskZoneService.findAllRiskZone();
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findRiskZoneBySuburb(req: Request, res: Response, next: NextFunction) {
    const { suburb } = req.query;
    try {
        const result = await RiskZoneService.findRiskZoneBySuburb(suburb as string);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

export const SuburbRiskZoneController = {
    createRiskZone,
    findAllRiskZone,
    findRiskZoneBySuburb
};
