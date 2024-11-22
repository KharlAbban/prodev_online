import axios from "axios";

export const getRegionInsights = async (regionName) => {
    try {
        const {data} = await axios.get(`"https://prodev-server.vercel.app/insights/region/${regionName}`);

        return data;

    } catch (error) {
        throw new Error(error);
    }
}

export const normalizeRegionName = (slug) => {
    const regionName = slug.replace("_", " ");
    return regionName;
}