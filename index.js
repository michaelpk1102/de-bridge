require("dotenv").config()
const express = require("express");
const path = require("path")
const ejsLayout = require("express-ejs-layouts")
// const PORT = 8010;
const app = express();

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
 app.use(ejsLayout)
app.use(express.static("public"))
app.use("/", require("./routes/pages.route"))







app.listen(process.env.PORT,() =>{
    console.log("App runing at PORT 8090")
})
