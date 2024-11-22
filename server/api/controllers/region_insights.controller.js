const { getRegionDetails } = require("../lib/fetchHelpers");

const oneRegionInsights = async (req, res) => {
    try {
        const {regionName} = req.params;

        if (!regionName) res.status(400).json({ message: "Invalid region name"})

        const regionDetails = await getRegionDetails(regionName);

        res.status(200).json(regionDetails);

    } catch (error) {
        console.log(error.message);
        throw new Error(error);
    }
}

module.exports = oneRegionInsights;