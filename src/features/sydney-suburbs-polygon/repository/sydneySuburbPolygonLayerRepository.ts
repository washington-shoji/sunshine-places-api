import { SydneySuburbPolygonLayerModel } from '../model/sydneySuburbPolygon.model';

async function findSydneyPolygonLayerBySuburb(suburb: string) {
    const layerResult = await SydneySuburbPolygonLayerModel.findOne({ 'fields.suburbname': suburb }).exec();
    return layerResult;
}

async function findSydneyPolygonLayerByPostcode(postcode: string) {
    const layerResult = await SydneySuburbPolygonLayerModel.findOne({ 'fields.postcode': postcode }).exec();
    return layerResult;
}

export const SydneySuburbPolygonLayerRepository = {
    findSydneyPolygonLayerBySuburb,
    findSydneyPolygonLayerByPostcode
};
