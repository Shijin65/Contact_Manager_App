const express = require ("express");
const dotenv = require("dotenv").config();


const app = express();
const port=process.env.PORT;


app.use(express.json());
app.use("/api/contact", require("./routes/contact_route"))



app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})