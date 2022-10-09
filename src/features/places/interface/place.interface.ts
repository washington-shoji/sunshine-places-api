import { ObjectId } from 'mongoose';

export interface IPlace {
    name: string;
    country: string;
    sunshineHours: number;
    image: string;
    description: string;
}
