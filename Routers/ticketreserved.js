const express = require('express');
const router = new express.Router() 

//require('./db/mongoose')
const ticketreserved = require('../Models/ticketreserved') 


//request for register/signup for users

router.post('/reserveticket', function(req, res){   
console.log(req.body);
const mydata = new ticketreserved(req.body)
mydata.save().then(function(){
res.send('ticketreserved')
}).catch(function(e){
res.send(e)

}) 
}) 
    

    
    //request to update user
    
    router.put('/updatereservedticket/:id', function(req, res){
        //console.log("dsfadf");
        ticketreserved.findOneAndUpdate({_id :req.params.id}, req.body).then(function(){
            res.send("ticketreserved updated")
        }).catch(function(){ 
            res.send("error")
        }) 
        })


router.delete('/deleteticketreserved/:id', function(req, res){
    console.log(req.params.id);
    ticketreserved.findByIdAndDelete(req.params.id).then(function(){
        res.send("ticketreserved deleted")
    }).catch(function(){ 
        res.send(e)
    })
    })
    
    
    //request for getting user information


router.get('/selectticketreserved/:id', function(req, res){
    ticketreserved.findById(req.params.id).then(function(user_data){

        //this line writes on postman
    res.send(user_data);
    console.log(req.body)
    res.send("data selected")
    //console.log(user_data)
    }).catch(function(e){
        res.send("error")
    });
    })
   

    router.get('/selectallticketreserved/', function(req, res){
        ticketreserved.find().then(function(user_data){
    
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