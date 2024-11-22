const { getRegionDetails } = require("../lib/fetchHelpers");
const { getRegionOvrScore } = require("../lib/scoreCalculators");

const oneRegionScore = async (req, res) => {
    try {
        const {regionName} = req.params;

        const regionDetails = await getRegionDetails(regionName);

        const ovrScore = await getRegionOvrScore(regionDetails, regionName);

        console.log(ovrScore);

        res.status(200).json(ovrScore);

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

module.exports = oneRegionScore;