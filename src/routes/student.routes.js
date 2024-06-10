const { Router } = require("express")

const StudentControllers = require("../controller/StudentControllers")
const StudentController = new StudentControllers()

const studentRoutes = Router()

studentRoutes.post("/", StudentController.create)

module.exports = studentRoutes