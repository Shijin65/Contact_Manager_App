const express = require ("express");
const router = express.Router();
const {showall ,showone ,createcontact,editcontact,deletecontact } =require("../contact_controler/contact_controler")
//GET 

router.route("/").get(showall);

//GET SINGLE CONTACT

router.route("/:id").get(showone);

//POST CONTACT

router.route("/").post(createcontact);

//UPDATE CONTACT

router.route("/:id").put(editcontact);

//DELETE THE CONTACT

router.route("/:id").delete(deletecontact);


module.exports= router;