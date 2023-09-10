const express = require ("express");
const dotenv = require("dotenv").config();


const app = express();
const port=process.env.PORT;

app.use("/api/contact", require("./routes/contact_route"))


// console.log("the server is runing")
app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})