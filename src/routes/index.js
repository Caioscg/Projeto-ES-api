const { Router } = require("express")

const studentRoutes = require("./student.routes")
const classRoutes = require("./class.routes")
const semesterRoute = require("./semester.routes")
const teacherRoutes = require("./teacher.routes")
const vicedirectorRoutes = require("./vicedirector.routes")

const routes = Router()

routes.use("/student", studentRoutes)
//routes.use("/class", classRoutes)
//routes.use("/semester", semesterRoute)
//routes.use("/teacher", teacherRoutes)
routes.use("/vd", vicedirectorRoutes)

module.exports = routes