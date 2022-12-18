import { NextFunction, Request, Response } from 'express';
import { APIError } from '../../../library/classes/api-error';
import { BaseError } from '../../../library/classes/base-error';
import { SchoolService } from '../service/school.service';

async function findAllSchools(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await SchoolService.findAllSchools();
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findBySchoolCode(req: Request, res: Response, next: NextFunction) {
    const schoolCode: number = req.body.schoolCode;
    try {
        const result = await SchoolService.findBySchoolCode(schoolCode);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

async function findBySchoolDocId(req: Request, res: Response, next: NextFunction) {
    const docId: string = req.body.docId;
    try {
        const result = await SchoolService.findBySchoolDocId(docId);
        return res.send(result);
    } catch (error) {
        const message = error instanceof APIError ? error.message : `Generic error for user`;
        res.status((<BaseError>error)?.httpCode || 500).send(message);
        next(error);
    }
}

export const SchoolController = {
    findAllSchools,
    findBySchoolCode,
    findBySchoolDocId
};
