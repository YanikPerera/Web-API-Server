const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const app = express();
const authentication = require("./middleware/authenticator");
const emailjob = require("./middleware/emailsender");
const home = require("./routes/home");
const heroes = require("./routes/heroes"); //import file

mongoose.connect("mongodb://localhost/herodb",{useNewUrlParser:true}).then(()=>console.log("connection successfully"))
.catch(ex=>console.log(ex));

app.use(cors());
app.use(express.json()); //middle wear - we cannot see the 


/*app.use((req, res, next) =>{
  console.log("Middleware function...");
  next();
  });*/
app.use(authentication);
//create own middleware
//next used for passed to next middle ware
app.use(emailjob);
//its runing under the order of this app call
//will runing on the server what ever the request it is

app.use("/api/heroes",heroes); // custom middle ware. starting from this, its' automatically go to heroes routes
app.use("/",home);
const PORT = 5000;
mongoose.connect("mongodb://localhost/herodb",{
  useNewUrlParser:true

});
app.get("/", (req, res) => { //middleware
  res.send("Avengers Assemble!");
});

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
  //server starting port