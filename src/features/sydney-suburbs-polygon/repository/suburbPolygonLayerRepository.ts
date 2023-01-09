import { SuburbPolygonLayerModel } from '../model/suburbPolygon.model';

async function findAllPolygonLayer() {
    let data = [];
    for await (const doc of SuburbPolygonLayerModel.find({}).select(['suburb_name', 'geo_point_2d'])) {
        data.push(doc);
    }
    return data;
}

async function findNearPolygonLayer(longitude: number, latitude: number) {
    const result = await SuburbPolygonLayerModel.find({
        geo_point_2d: {
            $near: {
                $geometry: {
                    type: 'Point',
                    coordinates: [longitude, latitude]
                },
                $maxDistance: 100
            }
        }
    })
        .select(['geo_point_3d'])
        .exec()
        .then(
            (data) => {
                console.log('data', data);
                return data;
            },
            (error) => {
                throw error;
            }
        );
    console.log('result', result);
    return result;
}

async function findPolygonLayerBySuburb(suburb: string) {
    const result = await SuburbPolygonLayerModel.findOne({ suburb_name: suburb })
        .exec()
        .then(
            (data) => {
                console.log('data', data);
                return data;
            },
            (error) => {
                throw error;
            }
        );
    return result;
}

async function findPolygonLayerByPostcode(postcode: string) {
    const result = await SuburbPolygonLayerModel.findOne({ post_code: postcode })
        .exec()
        .then(
            (data) => {
                return data;
            },
            (error) => {
                throw error;
            }
        );
    return result;
}

export const SuburbPolygonLayerRepository = {
    findAllPolygonLayer,
    findNearPolygonLayer,
    findPolygonLayerBySuburb,
    findPolygonLayerByPostcode
};
