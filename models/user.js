const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    nome : {type:String, required:true},
    email : {type:String, required:true},
    senha : {type:String, required:true},
    acessos : []
},{timestamps : true})

const User = mongoose.model('User', userSchema)
module.exports = User