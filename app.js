const express = require("express")
const Cors = require("cors")
const app = express()
const Route = require("./Route/Route")

app.use(express.json())
app.use(Cors())

app.use("/Api",Route)

module.exports = app