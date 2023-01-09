import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { SydneyPolygonLayerService } from '../service/suburbPolygonLayer.service';

async function findAllPolygonLayer(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await SydneyPolygonLayerService.findAllPolygonLayer();
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findNearPolygonLayer(req: Request, res: Response, next: NextFunction) {
    const { longitude, latitude } = req.query;
    const lon = parseFloat(parseFloat(longitude as string).toFixed(4));
    const lat = parseFloat(parseFloat(latitude as string).toFixed(4));
    try {
        const result = await SydneyPolygonLayerService.findNearPolygonLayer(lon, lat);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findPolygonLayerBySuburb(req: Request, res: Response, next: NextFunction) {
    const suburb: string = req.query.suburb as string;
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
    const postcode: string = req.query.postcode as string;
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
    findAllPolygonLayer,
    findNearPolygonLayer,
    findPolygonLayerBySuburb,
    findPolygonLayerByPostcode
};
