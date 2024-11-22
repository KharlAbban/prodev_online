const express = require("express");
const oneRegionInsights = require("../controllers/region_insights.controller");
const insightRouter = express.Router();

// insights for specific region
insightRouter.get("/region/:regionName", oneRegionInsights);

module.exports = insightRouter;