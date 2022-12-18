import mongoose, { Document, Schema } from 'mongoose';
import { ISuburbPolygonLayer as ISuburbPolygonLayer } from '../interface/suburbPolygon.interface';
export interface ISuburbPolygonLayerModel extends ISuburbPolygonLayer, Document {}

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

const fieldsSchema = new Schema({
    shapeuuid: {
        type: String
    },
    geo_shape: {
        type: polygonSchema
    },
    suburbname: String,
    postcode: String
});

const LayerSchema: Schema = new Schema(
    {
        fields: fieldsSchema,
        geometry: geometrySchema
    },
    { timestamps: true, strict: true }
);

LayerSchema.index({ fields: '2dsphere' });

export const SuburbPolygonLayerModel = mongoose.model<ISuburbPolygonLayerModel>('SydneySuburbCoordinates', LayerSchema);
