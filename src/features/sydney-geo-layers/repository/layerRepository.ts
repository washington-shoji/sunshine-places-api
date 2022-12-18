import { IPolygonData } from '../interface/layer.interface';
import { LayerModel } from '../model/sydney.model';

async function createLayer(polygonDataObject: IPolygonData) {
    const result = await LayerModel.create(polygonDataObject);
    return result;
}

async function findLayerByCoordinates(longitude: number, latitude: number) {
    const result = await LayerModel.where('location')
        .intersects()
        .geometry({
            type: 'Point',
            coordinates: [longitude, latitude]
        });
    return result;
}

async function findLayerBySuburb(suburb: string) {
    const result = await LayerModel.findOne({ suburb: suburb }).exec();
    return result;
}

export const LayerRepository = {
    createLayer,
    findLayerByCoordinates,
    findLayerBySuburb
};
