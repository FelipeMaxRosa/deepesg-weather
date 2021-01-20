const express = require("express");
const router = express.Router();

// Controller
const controllerWeather = require("../../controllers/weatherController")

// @routes GET api/weather/:id
// @description Get a Weather City
router.get("/:city", controllerWeather.findOne);


module.exports = router;
