const axios = require("axios");

const getRegionDetails = async (regionName) => {
    try {
        const regionDetail = await axios.get(`http://localhost:3000/regions/${regionName}`);

        return regionDetail.data;
        
    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

module.exports = {
    getRegionDetails
}