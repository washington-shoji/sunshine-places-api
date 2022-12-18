import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { HttpStatusCode } from '../../../library/enums/http.enum';
import { SuburbPolygonLayerRepository } from '../repository/suburbPolygonLayerRepository';

async function findPolygonLayerBySuburb(suburb: string) {
    try {
        const result = await SuburbPolygonLayerRepository.findPolygonLayerBySuburb(suburb);
        if (!result) {
            const errMessage = `Could not find ${suburb} data.`;
            throw new APIError(errMessage, 'findInDB', HttpStatusCode.NOT_FOUND);
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

async function findPolygonLayerByPostcode(postcode: string) {
    try {
        const result = await SuburbPolygonLayerRepository.findPolygonLayerByPostcode(postcode);
        if (!result) {
            const errMessage = `Could not find ${postcode} data.`;
            throw new APIError(errMessage, 'findInDB', HttpStatusCode.NOT_FOUND);
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

export const SydneyPolygonLayerService = {
    findPolygonLayerBySuburb,
    findPolygonLayerByPostcode
};
