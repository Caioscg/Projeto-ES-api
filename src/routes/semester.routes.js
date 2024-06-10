const { Router } = require("express")

const SemesterControllers = require("../controller/SemesterControllers")
const SemesterController = new SemesterControllers()

const semesterRoutes = Router()

semesterRoutes.post("/", SemesterController.create)
semesterRoutes.put("/", SemesterController.update)

module.exports = semesterRoutes