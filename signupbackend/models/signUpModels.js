const mongoose=require('mongoose');
const signUpTemplate=new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    cPassword: {
        type: String,
        required: true
    }

})
module.exports=mongoose.model('mytable',signUpTemplate);