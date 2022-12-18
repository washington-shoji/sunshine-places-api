import mongoose, { Document, Schema } from 'mongoose';
import { ISydneySchool } from '../interface/school.interface';

export interface IScoolLayerModel extends ISydneySchool, Document {}

const geometrySchema = new Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

const SchoolSchema = new Schema(
    {
        School_code: {
            type: Number
        },
        School_name: {
            type: String
        },
        Town_suburb: {
            type: String
        },
        Postcode: {
            type: Number
        },
        Level_of_schooling: {
            type: String
        },
        Selective_school: {
            type: String
        },
        LGA: {
            type: String
        },
        Latitude: {
            type: Number
        },
        Longitude: {
            type: Number
        },
        Geometry: geometrySchema
    },
    { timestamps: true, strict: true }
);

SchoolSchema.index({ Geometry: '2dsphere' });

export const SchoolLayerModel = mongoose.model<IScoolLayerModel>('SchoolDatas', SchoolSchema);
