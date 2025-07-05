const { Users } = require('../models')

async function validateCreateUser(req, res, next){
    const {name, email, password} = req.body;

    if(!name || !email || !password){
        return res.status(400).send("Preencha todos os campos")
    }

    if(password.length < 8){
        return res.status(400).send("A senha deve ter no minimo 8 caracteres")
    }

    const exists = await Users.findOne({
        where: {
            email: email
        }
    })

    if(exists){
        return res.status(400).send("Usuário já cadastrado")
    }

    next()
}

module.exports = {
    validateCreateUser
}