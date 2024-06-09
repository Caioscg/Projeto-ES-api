const { Router } = require("express")

const ViceDirectorControllers = require("../controller/ViceDirectorControllers")
const ViceDirectorController = new ViceDirectorControllers()

const ViceDirectorRoutes = Router()

ViceDirectorRoutes.post("/", ViceDirectorController.create)

module.exports = ViceDirectorRoutes