const errorHandler =(err,req,res,next)=>{
    const statucode = res.statucode ? req.statucode : 500;
    res.json({message: err.message , stacktrace: err.stackt})
}
module.exports = errorHandler;