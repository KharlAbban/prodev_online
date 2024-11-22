const calculatePopulationScore = async (population_stats) => {
    try {
        // Sub-indicators used = population density, dependency ratio, urbanization rate
        const {total, age_group: {child, youth_adult, elderly}, urban, land_area} = population_stats;
    
        // 1. Urbanization Rate
        const urbanization_rate = (urban / total) * 100;

        // benchmark(50%); optimal urbanization range = (40% - 60%)
        const optimal_urbanization_midpoint = 60;
        const urbanization_score_percent = adjustValue((urbanization_rate / optimal_urbanization_midpoint) * 100);


        // 2. Population Density
        const population_density = total / land_area;

        // Benchmark (100 - 400) people/km2
        const optimal_population_density_midpoint = 400 - 100;
        const population_density_score_percent = adjustValue(((population_density) / optimal_population_density_midpoint) * 100);


        // 3. Dependency Ratio
        const dependency_ratio = ((child + elderly) / youth_adult) * 100;

        // Benchmark (50 - 70) ; High value indicates many dependents; low value indicates many younger 
        const optimal_dependency_ratio_midpoint = 50;
        const dependency_ratio_score_percent = adjustValue((optimal_dependency_ratio_midpoint / dependency_ratio) * 100);
        
        // Final Population Score
        const weights = {
            population_density: 0.35,
            urbanization_rate: 0.35,
            dependency_ratio: 0.3
        }
        const population_score = (urbanization_score_percent * weights.urbanization_rate) + (population_density_score_percent * weights.population_density) + (dependency_ratio_score_percent * weights.dependency_ratio);
        
        return {
            population_score,
            breakdown: {
                urbanization_score_percent,
                population_density_score_percent,
                dependency_ratio_score_percent
            }
        };

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

const calculateJobScore = async (job_stats) => {
    try {
        const {unemployment_rate, employment_sector_distribution} = job_stats;

        // 1. Benchmark < 5%; range (5 - 20)
        const optimal_unemployment_rate = 15;
        const unemployment_score_percent = adjustValue((1 - (unemployment_rate / optimal_unemployment_rate)) * 100);
        
        return {
            job_score: unemployment_score_percent,
            breakdown: {
                unemployment_score_percent
            }
        };

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

const calculateHealthScore = async (health_stats, total_population) => {
    try {
        const {distance_to_facility, num_facilities} = health_stats;

        // 1. Average Distance to Health facility
        // Benchmark 5km; range (2 to 6)
        const optimal_distance = 5;
        const distance_score_percent = adjustValue((1 - (distance_to_facility / optimal_distance)) * 100);


        // 2. Facilites per 10k population
        const facilitiesPer10k = (num_facilities / total_population) * 10000;

        // Benchmark (25+) facilites per 10k population
        const optimal_facilities_per10k = 25;
        const facilitesPer10k_score_percent = adjustValue((facilitiesPer10k / optimal_facilities_per10k) * 100);


        // Final Health Score
        const health_score = (distance_score_percent * 0.5) + (facilitesPer10k_score_percent * 0.5);

        return {
            health_score,
            breakdown: {
                distance_score_percent,
                facilitesPer10k_score_percent
            }
        };
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);        
    }
}

const calculateOverallscore = async (populationScore, jobScore, healthScore) => {
    try {
        // Weights for each sustainability factor
        const weights = {
            population: 0.3,
            job: 0.4,
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

        const ovrScore = await calculateOverallscore(populationScore.population_score, jobScore.job_score, healthScore.health_score);

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

const adjustValue = (value, min = 0, max = 100) => {
    // If value is less than the minimum, return the minimum
    if (value < min) {
      return min;
    }
    // If value is greater than the maximum, return the maximum
    if (value > max) {
      return max;
    }
    return value;
  };

module.exports = {
    calculatePopulationScore,
    calculateJobScore,
    calculateHealthScore,
    calculateOverallscore,
    getRegionOvrScore
}