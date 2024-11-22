import axios from "axios";

export const getAllRegionsScores = async () => {
    try {
        const {data} = await axios.get("https://prodev-server.vercel.app/score/regions");

        const scores = data.scores;

        return scores;

    } catch (error) {
        throw new Error(error);
    }
}

export const getOneRegionScore = async (regionName) => {
    try {
        const {data} = await axios.get(`https://prodev-server.vercel.app/score/region/${regionName}`);

        const scoreInfo = data.scores;

        return scoreInfo;

    } catch (error) {
        throw new Error(error);
    }
}