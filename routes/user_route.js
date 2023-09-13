const express = require('express');
const { registeruser, loginuser, currentuser } = require('../contact_controler/user_controler');
const validuser = require('../middleware/validate_tokenhandler');
const router = express.Router();


router.post("/register", registeruser);

router.post("/login", loginuser);

router.get("/current",validuser,currentuser);


module.exports =router;