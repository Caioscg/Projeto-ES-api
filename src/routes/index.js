const { Router } = require("express")

const studentRoutes = require("./student.routes")

const routes = Router()

routes.use("/student", studentRoutes)

module.exports = routes