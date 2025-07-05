const express = require("express")
const router = express.Router()

const middlewareUsers = require("../middlewares/users")
const controllerUsers = require("../controllers/users")

router.post(
    "/users/register", 
    middlewareUsers.validateCreateUser, 
    controllerUsers.createUser
)

module.exports = router