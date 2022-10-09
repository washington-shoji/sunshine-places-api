import { PlaceModel } from '../model/place.model';
import { IPlace } from '../interface/place.interface';

export async function createPlaceService(place: IPlace) {
    try {
        const result = await PlaceModel.create(place);
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getAllPlacesService() {
    try {
        const result = await PlaceModel.find({});
        return result;
    } catch (error) {
        throw error;
    }
}

export async function updatePlaceService(id: string, place: IPlace) {
    try {
        const result = await PlaceModel.findByIdAndUpdate(id, place, { new: true });
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deletePlaceService(id: string) {
    try {
        const result = await PlaceModel.findByIdAndRemove(id);
        return result;
    } catch (error) {
        throw error;
    }
}
