const Post = require('../models/post')
const User = require('../models/user')

const post_new = async (req, res) => {
    const result = await Post.find()
    const resultUser = await User.find()
    res.render("post", {posts : result, users : resultUser});
};

const post_create = (req, res) => {
    const post = new Post(req.body)
    post.save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
};

const post_list = (req, res) => {
    res.render("index");
};

const post_list_id = async (req, res) => {
    const id = req.params.id
    const result = await Post.findById(id)
    //console.log(result)
    //const corpoPost = new DOMParser().parseFromString(result.post, 'text/html') 
    res.render("postdatails", {post : result});
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
    post_new,
    post_create,
    post_list,
    post_list_id,
    post_list_titulo,
    post_update,
    post_delete
}