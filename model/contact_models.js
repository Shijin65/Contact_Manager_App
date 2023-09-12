const mongoose = require('mongoose');

const contactschema = mongoose.Schema({
    name:{
        type : String,
        required:[true, 'name is required']
    },
    phone:{
        type : String,
        required:[true, 'phone is required']
    },
    email:{
        type : String,
        required:[true, 'email is required']
    }  
},{
    timestamps:true,
})
module.exports=mongoose.model("contact",contactschema);