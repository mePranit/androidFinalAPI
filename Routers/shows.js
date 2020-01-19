const express = require('express');
const router = new express.Router() 

//require('./db/mongoose')
const shows = require('../Models/shows') 


//request for register/signup for users

router.post('/registershow', function(req, res){   
console.log(req.body);
const mydata = new shows(req.body)
mydata.save().then(function(){
res.send('show register sucessful')
}).catch(function(e){
res.send(e)

}) 
}) 
    

    
    //request to update user
    
    router.put('/updateshow/:showid', function(req, res){
        //console.log("dsfadf");
        shows.findOneAndUpdate({_id :req.params.showid}, req.body).then(function(){
            res.send("show updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteshow/:showid', function(req, res){
    console.log(req.params.showid);
    shows.findByIdAndDelete(req.params.showid).then(function(){
        res.send("show deleted")
    }).catch(function(){ 
        res.send(e)
    })
    })
    
    
    //request for getting user information


router.get('/selectshow/:showid', function(req, res){
    shows.findById(req.params.showid).then(function(user_data){

        //this line writes on postman
    res.send(user_data);
    console.log(req.body)
    res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })
   

    router.get('/selectallshow/', function(req, res){
        shows.find().then(function(user_data){
    
            //this line writes on postman
        res.send(user_data);
        console.log(req.body)
        res.send("all data selected")
        //console.log(user_data)
        }).catch(function(e){
            res.send("error")
        });
        })
       
    


module.exports = router 