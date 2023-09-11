const express = require ("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();


const app = express();
const port=process.env.PORT;


app.use(express.json());
app.use("/api/contact", require("./routes/contact_route"))
app.use(errorHandler)


app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})