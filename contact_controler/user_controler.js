const asyncHanler = require("express-async-handler")
// const user = require("../model/user_model")

//register user

// /api/user/register
const registeruser = asyncHanler(async(req,res)=>{
    res.status(200).json({title:"registration is available" });
    res.end();
});

// /api/user/login
const loginuser = asyncHanler(async(req,res)=>{
    res.status(200).json({title:"login user" });
    res.end();
});

// /api/user/current
const currentuser = asyncHanler(async(req,res)=>{
    res.status(200).json({title:"current user" });
    res.end();
});


module.exports = {registeruser,loginuser,currentuser};