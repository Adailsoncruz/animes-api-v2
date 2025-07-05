const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const middlwareValidate = require('../middlewares/validate')

router.post("/login", authController.login);
router.get("/heartbeat",
     middlwareValidate.validateToken,
     authController.heartBeat
    );

module.exports = router