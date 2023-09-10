//GET ALL CONTACT

const showall =(req,res)=>{
    res.status(200).json({message:"this is home page from route controler"});
    res.end()
}

//GET SINGLE CONTACT

const showone =(req,res)=>{
    res.status(200).json({id:`${req.params.id}`,name:"shijin",number:"8848217507",email:"shijin@gmail.com"});
    res.end()
}

//CREATE A CONTACT

const createcontact =(req,res)=>{
    console.log("the new contact is :",req.body)
    res.status(201).json({message:"post is possible"});
    res.end()
}


//UPDATE CONTACT

const editcontact =(req,res)=>{
    res.status(201).json({message:`updation is available for ${req.params.id}`});
    res.end()
}


//DELETE THE CONTACT

const deletecontact =(req,res)=>{
    res.status(400).json({message:`content ${req.params.id} can be deleted`});
    res.end()
}



module.exports = {showall ,showone ,createcontact,editcontact,deletecontact}