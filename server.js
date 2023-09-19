const express = require ("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./Config/DBconnection");
const dotenv = require("dotenv").config();
// const cors = require("cors")

connectDB();
const app = express();
const port=process.env.PORT;
// const corsOptions = {
//     Access:"http://localhost:8000",
//     origin: 'http://localhost:8000/',
//     methods: 'POST',
//     allowedHeaders: 'Content-Type,Authorization',
//     credentials: true, // Enable cookies and HTTP authentication headers
//   };

app.use(express.json());
app.use(require("cors")());  
app.use("/api/contact", require("./routes/contact_route"));
app.use("/api/user", require("./routes/user_route"));
app.use(errorHandler);


app.listen(port,()=>{
    console.log(`the port is running at the port :${port}`)
})