import { IPolygonData } from '../interface/sydneyLayer.interface';
import { LayerModel } from '../model/sydney.model';

async function createSydneyLayer(polygonDataObject: IPolygonData) {
    const layerResult = await LayerModel.create(polygonDataObject);
    return layerResult;
}

async function findSydneyLayerByCoordinates(longitude: number, latitude: number) {
    const layerResult = await LayerModel.where('location')
        .intersects()
        .geometry({
            type: 'Point',
            coordinates: [longitude, latitude]
        });
    return layerResult;
}

async function findSydneyLayerBySuburb(suburb: string) {
    const layerResult = await LayerModel.findOne({ suburb: suburb }).exec();
    return layerResult;
}

export const SydneyLayerRepository = {
    createSydneyLayer,
    findSydneyLayerByCoordinates,
    findSydneyLayerBySuburb
};
