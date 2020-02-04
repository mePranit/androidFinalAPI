/*var mongoose = require('mongoose')
const Schema=mongoose.Schema;

const users = mongoose.model('users', {
    
    gmail: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})


module.exports = users
*/
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

const users=mongoose.Schema({
     
    gmail: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    tokens:[{
        token:{
        type:String,
        required:true
        }
    }]
});

users.statics.checkCredentialsDb=async(Username,Password)=>
{
  
    const user1=await User.findOne({username:Username,password:Password})
    if(user1){
                console.log(user1);
                return user1;
    }
    else{
console.log("not found")
return;
    }

}

users.methods.generateAuthToken=async function(){
    
    console.log("token");
  
    const user=this
    const token=jwt.sign({ _id:user._id.toString()},'thisismynewcourse')
    
    console.log(token);
    user.tokens=user.tokens.concat({token:token})
    await user.save()
    return token
}


const User=mongoose.model("User",users);
module.exports=User;