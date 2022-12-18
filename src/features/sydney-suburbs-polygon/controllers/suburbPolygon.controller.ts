import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { SydneyPolygonLayerService } from '../service/suburbPolygonLayer.service';

async function findPolygonLayerBySuburb(req: Request, res: Response, next: NextFunction) {
    const suburb: string = req.body.suburb;
    try {
        const result = await SydneyPolygonLayerService.findPolygonLayerBySuburb(suburb);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findPolygonLayerByPostcode(req: Request, res: Response, next: NextFunction) {
    const postcode: string = req.body.postcode;
    try {
        const result = await SydneyPolygonLayerService.findPolygonLayerByPostcode(postcode);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

export const SydneyPolygonLayerController = {
    findPolygonLayerBySuburb,
    findPolygonLayerByPostcode
};
