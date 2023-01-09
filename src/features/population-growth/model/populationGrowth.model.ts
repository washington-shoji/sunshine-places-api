import mongoose, { Document, Schema } from 'mongoose';
import { IPopulationGrowth } from '../interface/populationGrowth.interface';

export interface IPopulationGrowthModel extends IPopulationGrowth, Document {}

const geo_point_2d = new Schema({
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

const geo_point_3d = new Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates: {
        type: [[[Number]]],
        required: true
    }
});

const PopulationGrowthSchema = new Schema(
    {
        lga: {
            type: String
        },
        y_2011: {
            type: Number
        },
        y_2016: {
            type: Number
        },
        y_2021: {
            type: Number
        },
        y_2026: {
            type: Number
        },
        y_2031: {
            type: Number
        },
        geo_point_2d: geo_point_2d
        // geo_point_3d: geo_point_3d
    },
    { timestamps: true, strict: true }
);

PopulationGrowthSchema.index({ geo_point_2d: '2dsphere' });

export const PopulationGrowthModel = mongoose.model<IPopulationGrowthModel>('GisNswLgas', PopulationGrowthSchema);
