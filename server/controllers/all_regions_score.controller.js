const { ghana_regions } = require("../constants/admin_areas");
const { getRegionDetails } = require("../lib/fetchHelpers");
const { getRegionOvrScore } = require("../lib/scoreCalculators");

const allRegionsScore = async (req, res) => {
    try {
        const scores = {};

        await Promise.all(
            ghana_regions.map(async (regionName) => {
                // Fetch regional data
                const regionDetails = await getRegionDetails(regionName);

                // calculate score for region
                const regionOvrScore = await getRegionOvrScore(regionDetails, regionName);

                // Store scores in scores object
                scores[regionName] = regionOvrScore;
            })
        );

        res.status(200).json({
            message: "Regional scores calculated successfully",
            scores,
            
        });

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
        res.status(500).json({ error: error.message });
    }
}

 module.exports = allRegionsScore;