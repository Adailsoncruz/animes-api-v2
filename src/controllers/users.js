const { Users } = require("../models")
const bcrypt = require("bcrypt")


async function createUser(req, res) {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashPassword
        const newUser = await Users.create(req.body)

        return res.status(201).send(newUser)
    } catch (error) {
        return res.status(500).send("Erro ao criar user", error.message)
    }
}

module.exports = {
    createUser
}
