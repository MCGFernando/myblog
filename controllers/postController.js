const Post = require('../models/post')
const User = require('../models/user')

const post_create = (req, res) => {
    res.render("admin");
};

const post_list = (req, res) => {
    res.render("index");
};

const post_list_id = (req, res) => {
    res.render("categoria/form_cadastro_categoria");
};

const post_list_titulo = (req, res) => {
    res.render("index");
};

const post_update = (req, res) => {
    res.render("admin");
};

const post_delete = (req, res) => {
    res.render("categoria/form_cadastro_categoria");
};

module.exports = {
    post_create,
    post_list,
    post_list_id,
    post_list_titulo,
    post_update,
    post_delete
}