const { Router } = require("express")

const TeacherControllers = require("../controller/TeacherControllers")
const TeacherController = new TeacherControllers()

const TeacherRoutes = Router()

TeacherRoutes.post("/", TeacherController.create)

module.exports = TeacherRoutes