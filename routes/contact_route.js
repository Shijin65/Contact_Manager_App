const express = require ("express");
const router = express.Router();
const {showall ,showone ,createcontact,editcontact,deletecontact } =require("../contact_controler/contact_controler")


//GET //POST CONTACT

router.route("/").get(showall).post(createcontact);



//GET SINGLE CONTACT//UPDATE CONTACT//DELETE THE CONTACT

router.route("/:id").get(showone).put(editcontact).delete(deletecontact);


module.exports= router;