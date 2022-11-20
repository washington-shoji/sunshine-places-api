import { IPlace } from '../interface/place.interface';
import { PlaceRepository } from '../repository/placeRepository';

async function createPlace(place: IPlace) {
    try {
        const result = await PlaceRepository.cratePlace(place);
        return result;
    } catch (error) {
        throw error;
    }
}

async function getAllPlaces() {
    try {
        const result = await PlaceRepository.getAllPlaces();
        return result;
    } catch (error) {
        throw error;
    }
}

async function updatePlace(id: string, place: IPlace) {
    try {
        const result = await PlaceRepository.updatePlace(id, place);
        return result;
    } catch (error) {
        throw error;
    }
}

async function deletePlace(id: string) {
    try {
        const result = await PlaceRepository.deletePlace(id);
        return result;
    } catch (error) {
        throw error;
    }
}

export const PlaceService = {
    createPlace,
    getAllPlaces,
    updatePlace,
    deletePlace
};
