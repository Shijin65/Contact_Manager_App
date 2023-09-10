const express = require ("express");
const router = express.Router();

//GET 

router.route("/").get((req,res)=>{
    res.status(200).json({message:"this is home page from route"});
    res.end()
});

//GET SINGLE CONTACT

router.route("/:id").get((req,res)=>{
    res.status(200).json({message:`get the single contact ${req.params.id}`});
    res.end()
});

//POST CONTACT

router.route("/").post((req,res)=>{
    res.status(201).json({message:"post is possible"});
    res.end()
});

//UPDATE CONTACT

router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`updation is available ${req.params.id}`});
    res.end()
});

//DELETE THE CONTACT

router.route("/:id").delete((req,res)=>{
    res.status(400).json({message:`content can be deleted${req.params.id}`});
    res.end()
});


module.exports= router;