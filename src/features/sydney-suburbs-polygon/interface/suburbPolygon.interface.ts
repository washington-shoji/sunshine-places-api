export interface ILayerQueryParams {
    latitude: number;
    longitude: number;
    suburbName: string;
    postcode: number;
}

export interface IPolygonShape {
    type: string;
    coordinates: [[[number]]];
}

export interface IGeometry {
    type: string;
    coordinates: [number];
}

export interface ISuburbPolygonData {
    fields: {
        shapeuuid: string;
        geo_shape: IPolygonShape;
        suburbname: string;
        postcode: number;
    };
    geometry: IGeometry;
}

export interface ISuburbPolygonLayer {
    suburb: string;
    location: {
        type: string;
        coordinates: number[][][];
    };
}
