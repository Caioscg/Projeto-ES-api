const { Router } = require("express")

const CourseControllers = require("../controller/CourseControllers")
const CourseController = new CourseControllers()

const courseRoutes = Router()

courseRoutes.post("/", CourseController.create)
courseRoutes.put("/:id", CourseController.update)

module.exports = courseRoutes