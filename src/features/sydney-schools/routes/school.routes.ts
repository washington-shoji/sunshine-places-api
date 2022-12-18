import express from 'express';
import { SchoolController } from '../controller/school.controller';

export const schoolRouter = express.Router();

schoolRouter.get('/school', SchoolController.findAllSchools);
schoolRouter.get('/school/code', SchoolController.findBySchoolCode);
schoolRouter.get('/school/id', SchoolController.findBySchoolDocId);
