const jwt = require("jsonwebtoken")
require("dotenv").config();

function validateToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).send("token não fornecido")
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded; req.user
        next()
    } catch (error) {
        return res.status(401).send("Token inválido")
    }


}

module.exports = {
validateToken
}
