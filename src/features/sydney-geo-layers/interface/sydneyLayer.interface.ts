export interface ILayerQueryParams {
    latitude: number;
    longitude: number;
}

export interface IPolygonData {
    suburb: string;
    location: { type: string; coordinates: [[[number]]] };
}

export interface ILayer {
    suburb: string;
    location: {
        type: string;
        coordinates: number[][][];
    };
}
