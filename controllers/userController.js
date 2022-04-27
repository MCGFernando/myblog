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
      res.send(result);
    })
    .catch((err) => console.log(err));
};

const user_list = async (req, res) => {
  const result = await User.find()
  res.render("table_list_users", {users : result});
};

const user_list_id = async (req, res) => {
  const id = req.params.id
  const result = await User.findById(id)
  res.render("form_user", {user : result});
};

const user_list_titulo = (req, res) => {
  res.render("index");
};

const user_update = (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  //res.render("admin");
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
