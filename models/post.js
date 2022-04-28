const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comentario = new Schema({
    userComentario : {type:Schema.Types.ObjectId, ref:'User', required:true},
    comentario : {type:String, required:true},
    dataComentario :{type:Date, default: new Date()}
})

const postSchema = new Schema({
    user : {type:Schema.Types.ObjectId, ref:'User', required:true},
    titulo : {type:String, required:true},
    descricao : {type:String, required:true},
    post : {type:String, required:true},
    tags : [String],
    /* recursosDownload : [], */
    comentarios : {
        type : [Comentario],
        required : false
    } 
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post