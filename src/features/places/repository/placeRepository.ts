import { PlaceModel } from '../model/place.model';
import { IPlace } from '../interface/place.interface';

async function cratePlace(placeObject: IPlace) {
    const dbResult = await PlaceModel.create(placeObject);
    return dbResult;
}

async function getAllPlaces() {
    const dbResult = await PlaceModel.find({});
    return dbResult;
}

async function updatePlace(id: string, placeObject: IPlace) {
    const dbResult = await PlaceModel.findByIdAndUpdate(id, placeObject, { new: true });
    return dbResult;
}

async function deletePlace(id: string) {
    const dbResult = await PlaceModel.findByIdAndRemove(id);
    return dbResult;
}

export const PlaceRepository = {
    cratePlace,
    getAllPlaces,
    updatePlace,
    deletePlace
};
