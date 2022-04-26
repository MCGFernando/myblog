const User = require("../models/user");
const user_new = (req, res) => {
  res.render("signup");
};

const user_create = (req, res) => {
  const user = new User(req.body);
  user.acessos.push("User:Comentar");
  user
    .save()
    .then((result) => {
      console.log("User Cadastrado");
      res.send(result);
    })
    .catch((err) => console.log(err));
};

const user_list = (req, res) => {
  res.render("index");
};

const user_list_id = (req, res) => {
  res.render("categoria/form_cadastro_categoria");
};

const user_list_titulo = (req, res) => {
  res.render("index");
};

const user_update = (req, res) => {
  res.render("admin");
};

const user_delete = (req, res) => {
  res.render("categoria/form_cadastro_categoria");
};

module.exports = {
  user_new,
  user_create,
  user_list,
  user_list_id,
  user_list_titulo,
  user_update,
  user_delete,
};
