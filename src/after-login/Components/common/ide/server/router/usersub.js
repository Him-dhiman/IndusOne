const express = require('express');
const router = express.Router();

require('../db/conn');
const Submission = require("../model/subSchema");

router.post('/sub', (req,res)=>{
    const {usercode} = req.body;

    if(!usercode){
        return res.status(422).json({error:"please"});
    }
    const submission = new Submission (req.body)
    submission.save().then(()=>{
        res.status(201).json({message: "submission done"});
    }).catch((err)=> res.status(500).json({ error:"failed to submit"}));
    
    //res.json({message : req.body})

});
router.get('/sub', (req, res) => {

    Submission.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', dataerror);
        });
});
module.exports = router;