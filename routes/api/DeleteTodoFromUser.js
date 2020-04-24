var express=require('express');
var User=require('../../models/UserSchema');
var router=express.Router();

router.put('/updateuser/:id/:todoid', function (req,res){
    User.findByIdAndUpdate(req.params.id,{$pull:{todos:req.params.todoid}},(err,resultat)=>{
        if(err) res.send(err);
        res.send(resultat);
    });
});


module.exports=router;