import { ILayerQueryParams, IPolygonData } from '../interface/sydneyLayer.interface';
import { LayerModel } from '../model/sydney.model';
import { SydneyLayerRepository } from '../repository/sydneyLayerRepository';

async function createSydneyPolygonLayer(polygonData: IPolygonData) {
    try {
        const layerResult = await SydneyLayerRepository.createSydneyLayer(polygonData);
        return layerResult;
    } catch (error) {
        throw error;
    }
}

async function findSydneyLayerByCoordinates(queryParams: ILayerQueryParams) {
    const { longitude, latitude } = queryParams;
    try {
        const layerResult = SydneyLayerRepository.findSydneyLayerByCoordinates(longitude, latitude);
        return layerResult;
    } catch (error) {
        throw error;
    }
}

async function findSydneyLayerBySuburb(suburb: string) {
    try {
        const layerResult = await SydneyLayerRepository.findSydneyLayerBySuburb(suburb);
        return layerResult;
    } catch (error) {
        throw error;
    }
}

export const SydneyLayerService = {
    createSydneyPolygonLayer,
    findSydneyLayerByCoordinates,
    findSydneyLayerBySuburb
};
