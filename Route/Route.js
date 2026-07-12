const express = require("express")
const CarData = require("../Controller/CarData")
const Route = express.Router()


Route.get("/Cars",CarData)

module.exports = Route