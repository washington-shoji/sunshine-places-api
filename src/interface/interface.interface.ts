export interface IError {
    error: boolean;
    errorBody: {
        code: number;
        message: string;
    };
}

export interface IGeometry {
    geometry: {
        type: string;
        coordinates: number[];
    };
}
