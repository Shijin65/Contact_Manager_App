const express = require ("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./Config/DBconnection");
const dotenv = require("dotenv").config();
// const cors = require("cors")

connectDB();
const app = express();
const port=process.env.PORT;

app.use(express.json());
app.use(require("cors")());  
app.use("/api/contact", require("./routes/contact_route"));
app.use("/api/user", require("./routes/user_route"));
app.use(errorHandler);


if(connectDB){app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})}