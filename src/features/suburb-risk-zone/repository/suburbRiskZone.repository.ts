import { ISuburbRiskZone } from '../interface/suburbRiskZone.interface';
import { SuburbRiskZoneModel } from '../model/suburbRiskZone.model';

async function createRiskZone(riskZoneObject: ISuburbRiskZone) {
    const result = await SuburbRiskZoneModel.create(riskZoneObject);
    return result;
}

async function findAllRiskZone() {
    const result = await SuburbRiskZoneModel.find({});
    return result;
}

async function findRiskZoneById(id: string) {
    const result = await SuburbRiskZoneModel.findById(id);
    return result;
}

async function findRiskZoneBySuburb(suburb: string) {
    try {
        const result = await SuburbRiskZoneModel.findOne({ suburbName: suburb }).populate({ path: 'polygonData' });
        return result;
    } catch (error) {
        throw error;
    }
}

async function updateRiskZone(id: string, riskZoneObject: ISuburbRiskZone) {
    const result = await SuburbRiskZoneModel.findByIdAndUpdate(id, riskZoneObject, { new: true });
    return result;
}

async function deleteRiskZone(id: string) {
    const result = await SuburbRiskZoneModel.findByIdAndDelete(id);
    return result;
}

export const SuburbRiskZone = {
    createRiskZone,
    findAllRiskZone,
    findRiskZoneById,
    findRiskZoneBySuburb,
    updateRiskZone,
    deleteRiskZone
};
