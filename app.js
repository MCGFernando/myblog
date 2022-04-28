const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const Post = require('./models/post')

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

app.get("/", async (req, res) => {
  const result = await Post.find()
  res.render("index", {posts : result});
});

app.use("/user", userRoutes);
app.use("/post", postRoutes);
