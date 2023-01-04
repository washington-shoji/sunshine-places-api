import { IGeo_point_2d } from '../../../interface/interface.interface';

export interface ISydneySchool {
    school_code: number;
    school_name: string;
    town_suburb: string;
    postcode: number;
    level_of_schooling: string;
    selective_school: string;
    lga: string;
    latitude: number;
    longitude: number;
    geometry: IGeo_point_2d;
}
