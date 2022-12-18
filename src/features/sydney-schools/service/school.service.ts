import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { HttpStatusCode } from '../../../library/enums/http.enum';
import { SchoolRepository } from '../repository/schoolRepository.repository';

async function findAllSchools() {
    try {
        const result = await SchoolRepository.findAllSchools();
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

async function findBySchoolCode(schoolCode: number) {
    try {
        const result = await SchoolRepository.findBySchoolCode(schoolCode);
        if (!result) {
            const errMessage = `Could not find ${schoolCode} data.`;
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

async function findBySchoolDocId(docId: string) {
    try {
        const result = await SchoolRepository.findBySchoolDocId(docId);
        if (!result) {
            const errMessage = `Could not find ${docId} data.`;
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

export const SchoolService = {
    findAllSchools,
    findBySchoolCode,
    findBySchoolDocId
};
