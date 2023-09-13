const express = require('express');
const router = express.Router();


router.post("/register",(req,res)=>{
    res.status(200).json({title:"registration is available" });
    res.end();
});

router.post("/login",(req,res)=>{
    res.status(200).json({title:"login user" });
    res.end();
});

router.get("/current",(req,res)=>{
    res.status(200).json({title:"currnet will showup here" });
    res.end();
});


module.exports =router;