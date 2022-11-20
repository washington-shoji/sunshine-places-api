import { Request, Response } from 'express';
import { ILayerQueryParams, IPolygonData } from '../interface/sydneyLayer.interface';
import { SydneyLayerService } from '../service/sydneyLayer.service';
async function createSydneyLayer(req: Request, res: Response) {
    const layerData: IPolygonData = req.body;
    try {
        const layerResult = await SydneyLayerService.createSydneyPolygonLayer(layerData);
        if (layerResult) {
            return res.status(200).send({ message: 'Layer created successfully', data: layerResult });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not create Layer', error: error });
    }
}

async function findSydneyLayer(req: Request, res: Response) {
    const coordinates: ILayerQueryParams = req.body;
    try {
        const layerResult = await SydneyLayerService.findSydneyLayerByCoordinates(coordinates);
        if (layerResult) {
            return res.status(200).send({ message: 'Layer fetched successfully', data: layerResult });
        } else {
            return res.status(200).send({ message: 'There is no Layer yet', data: [] });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not fetch Layer', error: error });
    }
}

async function findSydneyLayerBySuburb(req: Request, res: Response) {
    const coordinates: string = req.body.suburb;
    try {
        const layerResult = await SydneyLayerService.findSydneyLayerBySuburb(coordinates);
        if (layerResult) {
            return res.status(200).send({ message: 'Layer fetched successfully', data: layerResult });
        } else {
            return res.status(200).send({ message: 'There is no Layer yet', data: [] });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not fetch Layer', error: error });
    }
}

export const SydneyLayerController = {
    createSydneyLayer,
    findSydneyLayer,
    findSydneyLayerBySuburb
};
