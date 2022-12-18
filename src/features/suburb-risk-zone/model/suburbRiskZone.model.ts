import mongoose, { Document, Schema } from 'mongoose';
import { ISuburbRiskZone } from '../interface/suburbRiskZone.interface';

export interface ISuburbRiskZoneModel extends ISuburbRiskZone, Document {}

const suburbRiskZoneSchema = new Schema({
    suburbName: {
        type: String,
        require: true
    },
    riskRate: {
        type: Number,
        require: true
    },
    riskType: {
        type: String,
        require: true
    },
    polygonData: [
        {
            type: Schema.Types.ObjectId,
            ref: 'SydneySuburbCoordinates'
        }
    ]
});

export const SuburbRiskZoneModel = mongoose.model<ISuburbRiskZoneModel>('SuburbRiskZones', suburbRiskZoneSchema);
