import { SydneySuburbPolygonLayerRepository } from '../repository/sydneySuburbPolygonLayerRepository';

async function findSydneyPolygonLayerBySuburb(suburb: string) {
    try {
        const layerResult = await SydneySuburbPolygonLayerRepository.findSydneyPolygonLayerBySuburb(suburb);
        return layerResult;
    } catch (error) {
        throw error;
    }
}

async function findSydneyPolygonLayerByPostcode(postcode: string) {
    try {
        const layerResult = await SydneySuburbPolygonLayerRepository.findSydneyPolygonLayerByPostcode(postcode);
        return layerResult;
    } catch (error) {
        throw error;
    }
}

export const SydneySuburbPolygonLayerService = {
    findSydneyPolygonLayerBySuburb,
    findSydneyPolygonLayerByPostcode
};
