import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { HttpStatusCode } from '../../../library/enums/http.enum';
import { ISuburbRiskZone } from '../interface/suburbRiskZone.interface';
import { SuburbRiskZone } from '../repository/suburbRiskZone.repository';

async function createRiskZone(riskZoneObject: ISuburbRiskZone) {
    try {
        const result = SuburbRiskZone.createRiskZone(riskZoneObject);
        if (!result) {
            const errMessage = `Could not create ${riskZoneObject} data.`;
            throw new APIError(errMessage, 'createInDB', HttpStatusCode.BAD_REQUEST);
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

async function findAllRiskZone() {
    try {
        const result = SuburbRiskZone.findAllRiskZone();
        if (!result) {
            const errMessage = `Could not find data.`;
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

async function findRiskZoneBySuburb(suburb: string) {
    try {
        const result = SuburbRiskZone.findRiskZoneBySuburb(suburb);
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

async function updateRiskZone(id: string, riskZoneObject: ISuburbRiskZone) {
    try {
        const riskZone = await SuburbRiskZone.findRiskZoneById(id);
        if (!riskZone) {
            const errMessage = `Could not find ${id} data.`;
            throw new APIError(errMessage, 'findInDB', HttpStatusCode.NOT_FOUND);
        }

        if (riskZone) {
            const result = await SuburbRiskZone.updateRiskZone(id, riskZoneObject);
            if (!result) {
                const errMessage = `Could not update ${id} data.`;
                throw new APIError(errMessage, 'updateInDB', HttpStatusCode.BAD_REQUEST);
            }
            return result;
        }
        return;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        } else {
            throw new BaseError('Could not perform async operation', error, 'findInDB');
        }
    }
}

async function deleteRiskZone(id: string) {
    try {
        const riskZone = await SuburbRiskZone.findRiskZoneById(id);
        if (!riskZone) {
            const errMessage = `Could not find ${id} data.`;
            throw new APIError(errMessage, 'findInDB', HttpStatusCode.NOT_FOUND);
        }
        if (riskZone) {
            SuburbRiskZone.deleteRiskZone(id);
            return { message: 'Risk zone deleted successfully' };
        }
        return;
    } catch (error) {
        if (error instanceof APIError) {
            throw error;
        } else {
            throw new BaseError('Could not perform async operation', error, 'findInDB');
        }
    }
}

export const RiskZoneService = {
    createRiskZone,
    findAllRiskZone,
    findRiskZoneBySuburb,
    updateRiskZone,
    deleteRiskZone
};
