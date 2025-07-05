const { Animes } = require("../models")

async function createAnime(req, res){
    try {
        const anime = await Animes.create(req.body)
        return res.status(201).send(anime)
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
    }
} 

async function getAnimes(req,res){
    try{
        const animes = await Animes.findAll()

        return res.send(animes)
    } catch (erro) {
        return res.status(500).send({
            error: error.message
        })
    }
}

module.exports = {
    createAnime,
    getAnimes
}