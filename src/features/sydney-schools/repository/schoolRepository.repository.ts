import { SchoolLayerModel } from '../model/school.model';

async function findAllSchools() {
    const result = await SchoolLayerModel.find({})
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

async function findBySchoolCode(schoolCode: number) {
    const result = await SchoolLayerModel.findOne({ School_code: schoolCode }).exec();
    return result;
}

async function findBySchoolDocId(docId: string) {
    const result = await SchoolLayerModel.findById(docId).exec();
    return result;
}

export const SchoolRepository = {
    findAllSchools,
    findBySchoolCode,
    findBySchoolDocId
};
