import mongoose, { Document, Schema } from 'mongoose';
import { ILayer } from '../interface/layer.interface';
export interface ILayerModel extends ILayer, Document {}

const polygonSchema = new Schema({
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

const LayerSchema: Schema = new Schema(
    {
        suburb: String,
        location: polygonSchema
    },
    { timestamps: true }
);

LayerSchema.index({ location: '2dsphere' });

export const LayerModel = mongoose.model<ILayerModel>('Layer', LayerSchema);
