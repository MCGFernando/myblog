const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes')
app.set("view engine", "ejs");
app.listen(3000);

const dbURI =
  "mongodb://netninja:test1234@node-shard-00-00.02vk8.mongodb.net:27017,node-shard-00-01.02vk8.mongodb.net:27017,node-shard-00-02.02vk8.mongodb.net:27017/myblog?ssl=true&replicaSet=atlas-c50oyj-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Conectado a BD");
  })
  .catch((err) => console.log(err));

  app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/admin", (req, res) => {
  res.render("admin");
});

/* app.get("/signup", (req, res) => {
  res.render("signup");
});
 */
app.use('/user', userRoutes)