import { PopulationGrowthModel } from '../model/populationGrowth.model';

async function findAllSuburbGrowth() {
    let data: any = [];
    await PopulationGrowthModel.find({})
        //.limit(10)
        .lean()
        .cursor({ batchSize: 50 })
        .eachAsync(
            async (doc) => {
                data.push(doc);
            },
            { parallel: 5 }
        )
        .catch((error) => {
            throw error;
        });
    return data;
}

export const PopulationGrowthRepository = {
    findAllSuburbGrowth
};
