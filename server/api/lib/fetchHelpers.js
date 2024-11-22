const axios = require("axios");

const getRegionDetails = async (regionName) => {
    try {
        const regionDetail = await axios.get(`https://prodev-data.vercel.app//regions/${regionName}`);

        return regionDetail.data;
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

module.exports = {
    getRegionDetails
}