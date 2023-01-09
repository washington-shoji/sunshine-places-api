import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { HttpStatusCode } from '../../../library/enums/http.enum';
import { PopulationGrowthRepository } from '../repository/populationGrowth.repository';

async function findAllSuburbGrowth() {
    try {
        const result = await PopulationGrowthRepository.findAllSuburbGrowth();
        if (!result) {
            const errMessage = `Could not find schools data.`;
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

export const PopulationGrowthService = {
    findAllSuburbGrowth
};
