import mongoose, { Document, Schema } from 'mongoose';
import { IPlace } from '../interface/place.interface';

export interface IPlaceModel extends IPlace, Document {}

const PlaceSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        country: { type: String, required: true },
        sunshineHours: { type: Number, required: true },
        image: { type: String, required: true },
        description: { type: String, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const PlaceModel = mongoose.model<IPlaceModel>('place', PlaceSchema);
