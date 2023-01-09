import { IGeo_point_2d } from '../../../interface/interface.interface';
import { IGeo_point_3d } from './../../../interface/interface.interface';

export interface IPopulationGrowth {
    lga: string;
    2011?: number;
    2016?: number;
    2021?: number;
    2026?: number;
    2031?: number;
    geo_point_2d?: IGeo_point_2d;
    geo_point_3d?: IGeo_point_3d;
}
