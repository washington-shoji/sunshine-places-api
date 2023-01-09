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
    geo_point_3d: {
        type: polygonSchema
    }
});

const LayerSchema: Schema = new Schema(
    {
        geo_point_3d: polygonSchema,
        geo_point_2d: geometrySchema,
        suburb_name: String,
        post_code: String
    },
    { timestamps: true, strict: true }
);

LayerSchema.index({ geo_point_2d: '2dsphere' });

export const SuburbPolygonLayerModel = mongoose.model<ISuburbPolygonLayerModel>('SuburbPolygons', LayerSchema);
