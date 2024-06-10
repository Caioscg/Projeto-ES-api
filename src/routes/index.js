const { Router } = require("express")

const studentRoutes = require("./student.routes")
const classRoutes = require("./class.routes")
const semesterRoute = require("./semester.routes")
const teacherRoutes = require("./teacher.routes")
const vicedirectorRoutes = require("./vicedirector.routes")
const courseRoutes = require("./course.routes")
const disciplineRoutes = require("./discipline.routes")

const routes = Router()

routes.use("/student", studentRoutes)
routes.use("/class", classRoutes)
routes.use("/semester", semesterRoute)
routes.use("/teacher", teacherRoutes)
routes.use("/vd", vicedirectorRoutes)
routes.use("/course", courseRoutes)
routes.use("/discipline", disciplineRoutes)

module.exports = routes