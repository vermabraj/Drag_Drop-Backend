
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    pass:String,
    age:Number,
    city:String
})

const UserModel = mongoose.model("user",UserSchema)
module.exports = {UserModel}