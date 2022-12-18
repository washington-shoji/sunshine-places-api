import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { ILayerQueryParams, IPolygonData } from '../interface/layer.interface';
import { LayerService } from '../service/sydneyLayer.service';
async function createLayer(req: Request, res: Response, next: NextFunction) {
    const layerData: IPolygonData = req.body;
    try {
        const result = await LayerService.createPolygonLayer(layerData);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findLayer(req: Request, res: Response, next: NextFunction) {
    const coordinates: ILayerQueryParams = req.body;
    try {
        const result = await LayerService.findLayerByCoordinates(coordinates);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findLayerBySuburb(req: Request, res: Response, next: NextFunction) {
    const coordinates: string = req.body.suburb;
    try {
        const result = await LayerService.findLayerBySuburb(coordinates);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

export const LayerController = {
    createLayer,
    findLayer,
    findLayerBySuburb
};
