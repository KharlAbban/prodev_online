if (process.NODE_ENV !== "production") require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const scoreRouter = require("./routes/routes.score");
const insightRouter = require("./routes/routes.insights");
const { regionNames, regionDataObject, popByAgegroup } = require("./constants/regionStuff");

const app = express();
const PORT_NO = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan("dev"));

// Sustainability scores routes
app.use("/score", scoreRouter);
app.use("/insights", insightRouter);

app.listen(PORT_NO, (req, res) => {
    console.log(`Server is running on port ${PORT_NO}`);
});

// app.get("/", async (req, res) => {
//     let newObj = [];
//     try {
//         regionNames.map((region, index) => {
//             const regionObject = regionDataObject.find(obj => obj.id === region);;
//             const dataToSub = popByAgegroup[index];

//             regionObject.health.facility_breakdown.hospital = Number(dataToSub[1]);
//             regionObject.health.facility_breakdown.clinic = Number(dataToSub[3]);
//             regionObject.health.facility_breakdown.polyclinic = Number(dataToSub[2]);
//             regionObject.health.facility_breakdown.chps_compound = Number(dataToSub[4]);
//             regionObject.health.maternity_homes = Number(dataToSub[6]);
//             regionObject.health.num_facilities = Number(dataToSub[5]);

//             regionObject.population.land_area = Number(dataToSub[7]);

//             console.log(regionObject);

//             newObj.push(regionObject);

//         });
//     } catch (error) {
//         throw new Error(error);
//     }
// });

app.get("/*", (req, res) => {
    res.status(404).json({
        message: "Route does not exist!"
    })
});
