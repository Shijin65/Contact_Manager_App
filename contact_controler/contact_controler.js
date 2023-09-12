const asyncHanler = require("express-async-handler")
const Contact = require("../model/contact_models")



//GET ALL CONTACT

const showall = asyncHanler(async(req,res)=>{
    const allContacts = await Contact.find();
    res.status(200).json(allContacts);
    res.end()
});

//GET SINGLE CONTACT

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
    })
    res.status(201).json(contact);
    res.end();
});




//UPDATE CONTACT

const editcontact = asyncHanler(async (req,res)=>{

    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
    }


    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true});
    res.status(201).json(updatedcontact);
    res.end();
});




//DELETE THE CONTACT

const deletecontact = asyncHanler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404)
        throw new Error("contact not found")
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