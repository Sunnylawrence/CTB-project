
const express = require("express")
const bodyParser=require("body-parser")
const app = express();

const adminRoutes=require("./routes/admin");

app.use(adminRoutes);
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
});