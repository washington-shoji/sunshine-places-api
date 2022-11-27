import { Request, Response } from 'express';
import { SydneySuburbPolygonLayerService } from './../service/sydneySuburbPolygonLayer.service';

async function findSydneyPolygonLayerBySuburb(req: Request, res: Response) {
    const suburb: string = req.body.suburb;
    try {
        const layerResult = await SydneySuburbPolygonLayerService.findSydneyPolygonLayerBySuburb(suburb);
        if (layerResult) {
            return res.status(200).send({ message: 'Layer fetched successfully', data: layerResult });
        } else {
            return res.status(200).send({ message: 'There is no Layer yet', data: [] });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not fetch Layer', error: error });
    }
}

async function findSydneyPolygonLayerByPostcode(req: Request, res: Response) {
    const postcode: string = req.body.postcode;
    try {
        const layerResult = await SydneySuburbPolygonLayerService.findSydneyPolygonLayerByPostcode(postcode);
        if (layerResult) {
            return res.status(200).send({ message: 'Layer fetched successfully', data: layerResult });
        } else {
            return res.status(200).send({ message: 'There is no Layer yet', data: [] });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not fetch Layer', error: error });
    }
}

export const SydneySuburbPolygonLayerController = {
    findSydneyPolygonLayerBySuburb,
    findSydneyPolygonLayerByPostcode
};
