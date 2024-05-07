const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:{
        type:'string',
        required:true
    },
    password:{
        type:'string',
        required:'true'
    },
});

const User=mongoose.model("User",userSchema)
// eslint-disable-next-line no-undef
module.exports=User;