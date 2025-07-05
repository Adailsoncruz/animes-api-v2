const express = require("express");
const router = express.Router();
const middlewareAnimes = require("../middlewares/animes");
const controllerAnimes = require("../controllers/animes");
const middlwareValidate = require("../middlewares/validate");

router.post(
    "/animes", 
    middlwareValidate.validateToken,
    middlewareAnimes.validateCreateAnime, 
    controllerAnimes.createAnime
)

router.get(
    "/animes",
    middlwareValidate.validateToken,
    controllerAnimes.getAnimes
)

module.exports = router;