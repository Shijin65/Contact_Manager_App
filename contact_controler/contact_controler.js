const asyncHanler = require("express-async-handler")
const Contact = require("../model/contact_models")



//GET ALL CONTACT
//ONLY VALID USER CAN ACCESS
const showall = asyncHanler(async(req,res)=>{
    const allContacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(allContacts);
    res.end()
});


//GET SINGLE CONTACT
//ONLY VALID USER CAN ACCESS
const showone = asyncHanler(async (req,res)=>{
    
        const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }
    res.status(200).json(contact);
    res.end();  
});



//CREATE A CONTACT
//ONLY VALID USER CAN ACCESS
const createcontact = asyncHanler(async (req,res)=>{
    console.log("the new contact is :",req.body);
    const {name,email,phone} = req.body;
    if (!name || ! email || !phone) {
        res.status(404);
        throw new Error("all the fields a mantatory")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id :req.user.id
    })
    res.status(201).json(contact);
    res.end();
});



//UPDATE CONTACT
//ONLY VALID USER CAN ACCESS
const editcontact = asyncHanler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }

    //checking if the logined user user_id and user_id assigned to contact in database are the same 
    //so the user can only access the contact which id is assigned to. 
    if (contact.user_id.toString() !== req.user.id ){
        res.status(400);
        throw new Error("one user cannot access other contact");
    }

    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true});
    res.status(201).json(updatedcontact);
    res.end();
});



//DELETE THE CONTACT
//ONLY VALID USER CAN ACCESS
const deletecontact = asyncHanler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }

     //checking if the logined user user_id and user_id assigned to contact in database are the same 
    //so the user can only access the contact which id is assigned to. 
    if (contact.user_id.toString() !== req.user.id ){
        res.status(400);
        throw new Error("one user cannot access other contact");
    }
    
    try {
         await Contact.deleteOne({ _id: req.params.id });
            res.status(400).json({"DELETED_CONTACT":contact});
            res.end();
    } catch (error) {
        console.log(error)
    }
       
});



module.exports = {showall ,showone ,createcontact,editcontact,deletecontact}