const calculatePopulationScore = async (population_stats) => {
    try {
        const {total, urban, land_area} = population_stats;
    
        // Int'l benchmarks
        const recDensity = 300;
        const recUrbanPercentage = 60;
    
        // Population sustainability determinants
        const popDensity = (total / land_area);
        const urbanPercentage = (urban / total) * 100;
    
        // Determinant scores
        const densityScore = Math.min((popDensity / recDensity), 1);
        const urbanPercentScore = Math.min((urbanPercentage / recUrbanPercentage), 1);
    
        const population_score = (densityScore * 0.6) + (urbanPercentScore * 0.4);
    
        return population_score;
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

const calculateJobScore = async (job_stats) => {
    try {
        const {unemployment_rate, employment_sector_distribution} = job_stats;
    
        // Int'l benchmarks
        const recUnemploymentRate = 5;
    
        // Determinant scores
        const unemploymentScore = Math.min((unemployment_rate / recUnemploymentRate), 1);
        
        // Sector balance score
        const sectorValues = Object.values(employment_sector_distribution);
        const recShare = 100 / sectorValues.length;
        const sectorVariance = sectorValues.reduce((sum, value) => sum + Math.pow(value - recShare, 2), 0) / sectorValues.length;
        const sectorBalanceScore = 1 - Math.min((sectorVariance / 100), 1);
    
        const job_score = (unemploymentScore * 0.7) + (sectorBalanceScore * 0.3);
    
        return job_score;
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

const calculateHealthScore = async (health_stats, total_population) => {
    try {
        const {distance_to_facility, num_facilities} = health_stats;
    
        // Int'l benchmarks
        const recAvgDistance = 5;
        const facilitiesPer10k = 10 / 10000;
    
        // Determinant scores
        // Reverse this, since lower is better
        const distanceScore = Math.min((recAvgDistance / distance_to_facility), 1);

        // Facility ratio score
        const facilityRatio = num_facilities / total_population;
        const facilityScore = Math.min((facilityRatio / facilitiesPer10k), 1);
    
        const health_score = (distanceScore * 0.5) + (facilityScore * 0.5);
        return health_score;
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);        
    }
}

const calculateOverallscore = async (populationScore, jobScore, healthScore) => {
    try {
        // Weights for each sustainability factor
        const weights = {
            population: 0.4,
            job: 0.3,
            health: 0.3
        }

        // overall score
        const overall_score = (populationScore * weights.population) + (jobScore * weights.job) + (healthScore * weights.health);

        return overall_score;

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

const getRegionOvrScore = async (regionDetails, regionName) => {
    try {
        const {population, jobs, health} = regionDetails;

        const populationScore = await calculatePopulationScore(population);
        const jobScore = await calculateJobScore(jobs);
        const healthScore = await calculateHealthScore(health, population.total);

        const ovrScore = await calculateOverallscore(populationScore, jobScore, healthScore);

        return {
            regionName,
            populationScore,
            jobScore,
            healthScore,
            ovrScore
        };

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

module.exports = {
    calculatePopulationScore,
    calculateJobScore,
    calculateHealthScore,
    calculateOverallscore,
    getRegionOvrScore
}