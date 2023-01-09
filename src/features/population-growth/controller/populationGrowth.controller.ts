import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { PopulationGrowthService } from '../service/populationGrowth.service';

async function findAllSuburbGrowth(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await PopulationGrowthService.findAllSuburbGrowth();
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

export const PopulationGrowthController = {
    findAllSuburbGrowth
};
