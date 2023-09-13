const express = require('express');
const { registeruser, loginuser, currentuser } = require('../contact_controler/user_controler');
const router = express.Router();


router.post("/register", registeruser);

router.post("/login", loginuser);

router.get("/current", currentuser);


module.exports =router;