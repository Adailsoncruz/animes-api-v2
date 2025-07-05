async function validateCreateAnime(req, res, next){
    const { title, description, image, episodes } = req.body;

    if(!title || !description || !image || !episodes){
        return res.status(400).send({
            error: "Preencha todos os campos obrigatórios"
        })
    }

    if(title.length > 255){
        return res.status(400).send({
            error: "O título deve ter no máximo 255 caracteres"
        })
    }

    if(description.length > 500){
        return res.status(400).send({
            error: "A descrição deve ter no máximo 500 caracteres"
        })
    }

    if(typeof episodes !== "number"){
        return res.status(400).send({
            error: "O número de episódios deve ser um número"
        })
    }

    if(episodes < 0){
        return res.status(400).send({
            error: "O número de episódios deve ser maior que 0"
        })
    }

    next()
}

module.exports = {
    validateCreateAnime
}