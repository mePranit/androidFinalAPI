const express = require('express');
const router = new express.Router() 

//require('./db/mongoose')
const users = require('../Models/users') 




//request for register/signup for users

router.post('/register', function(req, res){   
console.log(req.body);
const mydata = new users(req.body)
mydata.save().then(function(){
res.send('register sucessful')
}).catch(function(e){
res.send(e)

}) 
}) 

//request for getting user information


router.get('/userinfo/:userid', function(req, res){
    users.find(req.params.id).then(function(user_data){

        //this line writes on postman
    res.send(user_data);
   // console.log(req.body)
   // res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })
    

    
    //request to update user
    
    router.put('/updateuser/:userid', function(req, res){
        //console.log("dsfadf");
        users.findOneAndUpdate({_id :req.params.userid}, req.body).then(function(){
            res.send("updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteuser/:userid', function(req, res){
    console.log(req.params.id);
    users.findByIdAndDelete(req.params.userid).then(function(){
        res.send("deleted")
    }).catch(function(){ 
        res.send(e)
    })
    })
    
    
   


module.exports = router 