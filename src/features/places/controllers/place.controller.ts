import { Request, Response } from 'express';
import { IPlace } from '../interface/place.interface';
import { createPlaceService, getAllPlacesService, deletePlaceService, updatePlaceService } from '../service/place.service';

export async function createPlaceController(req: Request, res: Response) {
    const body: IPlace = req.body;
    try {
        const place = await createPlaceService(body);
        if (place) {
            return res.status(200).send({ message: 'Place created successfully', data: place });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not create a Place', error: error });
    }
}

export async function getAllPlacesController(req: Request, res: Response) {
    try {
        const allPlaces = await getAllPlacesService();

        if (allPlaces && allPlaces.length > 0) {
            return res.status(200).send({ message: 'Places fetched successfully', data: allPlaces });
        } else {
            return res.status(200).send({ message: 'There is no place yes', data: [] });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not fetch Places', error: error });
    }
}

export async function updatePlaceByIdController(req: Request, res: Response) {
    const id: string = req.params.placeId;
    const body: IPlace = req.body;

    try {
        const updatedPlace = await updatePlaceService(id, body);

        if (updatedPlace) {
            return res.status(202).send({ message: 'Place updated successfully', data: updatedPlace });
        } else {
            return res.status(404).send({ message: 'Could not find place' });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not update Place', error: error });
    }
}

export async function deletePlaceByIdController(req: Request, res: Response) {
    const id: string = req.params.placeId;

    try {
        const deletePlace = await deletePlaceService(id);

        if (deletePlace) {
            return res.status(202).send({ message: 'Place deleted successfully' });
        } else {
            return res.status(404).send({ message: 'Could not find place' });
        }
    } catch (error) {
        return res.status(500).send({ message: 'Could not delete Place', error: error });
    }
}
