const express = require("express");
const oneRegionScore = require("../controllers/one_region_score.controller");
const allRegionsScore = require("../controllers/all_regions_score.controller");
const scoreRouter = express.Router();

// score for an array of regions
scoreRouter.get("/regions", allRegionsScore);

// score for specific region
scoreRouter.get("/region/:regionName", oneRegionScore);

module.exports = scoreRouter;