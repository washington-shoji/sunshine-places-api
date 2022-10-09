import { Request, Response } from 'express';
import { IPlace } from '../interface/place.interface';
import { createPlaceService, getAllPlacesService, deletePlaceService, updatePlaceService } from '../service/place.service';

export async function createPlaceController(req: Request, res: Response) {
    const body: IPlace = req.body;
    const place = await createPlaceService(body);

    if (place) {
        return res.status(200).send(place);
    } else {
        return res.status(500).send({ message: 'Could not create a Place' });
    }
}

export async function getAllPlacesController(req: Request, res: Response) {
    const allPlaces = await getAllPlacesService();

    if (allPlaces) {
        return res.status(200).send(allPlaces);
    } else {
        return res.status(500).send({ message: 'Could not fetch Places' });
    }
}

export async function updatePlaceByIdController(req: Request, res: Response) {
    const id: string = req.params.placeId;
    const body: IPlace = req.body;

    const updatedPlace = await updatePlaceService(id, body);

    if (updatedPlace) {
        res.status(202).send(updatedPlace);
    } else {
        return res.status(500).send({ message: 'Could not update Place' });
    }
}

export async function deletePlaceByIdController(req: Request, res: Response) {
    const id: string = req.params.placeId;
    const deletePlace = await deletePlaceService(id);

    if (deletePlace) {
        res.status(200).send({ message: 'Place successfully deleted' });
    } else {
        return res.status(500).send({ message: 'Could not delete Place' });
    }
}
