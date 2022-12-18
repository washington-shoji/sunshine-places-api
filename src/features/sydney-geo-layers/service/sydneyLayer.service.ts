import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { HttpStatusCode } from '../../../library/enums/http.enum';
import { ILayerQueryParams, IPolygonData } from '../interface/layer.interface';
import { LayerRepository } from '../repository/layerRepository';

async function createPolygonLayer(polygonData: IPolygonData) {
    try {
        const result = await LayerRepository.createLayer(polygonData);
        if (!result) {
            const errMessage = `Could not create ${polygonData} data.`;
            throw new APIError(errMessage, 'createInDB', HttpStatusCode.BAD_REQUEST);
        }
        return result;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        } else {
            throw new BaseError('Could not perform async operation', error, 'createInDB');
        }
    }
}

async function findLayerByCoordinates(queryParams: ILayerQueryParams) {
    const { longitude, latitude } = queryParams;
    try {
        const result = LayerRepository.findLayerByCoordinates(longitude, latitude);
        if (!result) {
            const errMessage = `Could not find data.`;
            throw new APIError(errMessage, 'createInDB', HttpStatusCode.BAD_REQUEST);
        }
        return result;
    } catch (error) {
        throw error;
    }
}

async function findLayerBySuburb(suburb: string) {
    try {
        const result = await LayerRepository.findLayerBySuburb(suburb);
        if (!result) {
            const errMessage = `Could not find ${suburb} data.`;
            throw new APIError(errMessage, 'findInDB', HttpStatusCode.BAD_REQUEST);
        }
        return result;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        } else {
            throw new BaseError('Could not perform async operation', error, 'findInDB');
        }
    }
}

export const LayerService = {
    createPolygonLayer,
    findLayerByCoordinates,
    findLayerBySuburb
};
