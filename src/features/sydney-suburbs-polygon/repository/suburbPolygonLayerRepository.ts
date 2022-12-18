import { SuburbPolygonLayerModel } from '../model/suburbPolygon.model';

async function findPolygonLayerBySuburb(suburb: string) {
    const result = await SuburbPolygonLayerModel.findOne({ 'fields.suburbname': suburb }).exec();
    return result;
}

async function findPolygonLayerByPostcode(postcode: string) {
    const result = await SuburbPolygonLayerModel.findOne({ 'fields.postcode': postcode }).exec();
    return result;
}

export const SuburbPolygonLayerRepository = {
    findPolygonLayerBySuburb,
    findPolygonLayerByPostcode
};
