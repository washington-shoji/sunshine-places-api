export interface IError {
    error: boolean;
    errorBody: {
        code: number;
        message: string;
    };
}

export interface IGeo_point_2d {
    geometry: {
        type: string;
        coordinates: number[];
    };
}

export interface IGeo_point_3d {
    suburb: string;
    location: { type: string; coordinates: [[[number]]] };
}
