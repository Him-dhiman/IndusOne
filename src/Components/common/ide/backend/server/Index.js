const express = require("express");
const router = express.Router();
const assert = require('assert').strict;
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// To test get_status
const he_id = 'he_id_returned_when_code_executed';

// To test get_output
const output_url = 'output_url_received_after_execution_completes';

const clientSecret = '100c4cdce5f41317ea40f67ede60f6ee0e58a4af';



const HackerEarth = require('hackerearth-v4-node');
const HE = new HackerEarth({ 'clientSecret': clientSecret });

router.post('/', (req, res, next) => {
    var config = {};
    config.time_limit = 5;  //your time limit in integer
    config.memory_limit = 323244;  //your memory limit in integer
    config.source = req.body.code;  //your source code for which you want to use hackerEarth api
    config.input = req.body.input;  //input against which you have to test your source code
    config.language = req.body.language;

    HE.execute(config, (err, response) => {
        if (err) {
            return res.status(500).json({
                "message": "Unable to process the request",
                "error": err
            });
        } else {
            assert.equal(200, response.status);
            assert.ok(response.data.he_id, "response should have he_id");
            
        }
    });
    
        it("should return a 200 OK response & should have a he_id",function (done) {
            HE.get_status(he_id,(err,response)=>{
                if(err){
                    done(err);
                }
                else{
                    assert.equal(200,response.status);
                    assert.ok(response.data.result,"response data should have a result property");
                    assert.ok(response.data.request_status,"response data should have a request_status");
                    done();
                }
            })
        })
    
    HE.get_output({
        url: output_url
    }, (err, response) => {
        if (err) {
            return res.status(500).json({
                "message": "Unable to process the request",
                "error": err
            });
        }
        else {
            assert.equal(200, response.status);
            assert.ok(response.data, "response data should have a result property");
            assert.equal(response.data,"", "data is 5 in this particular case");
        }
    })
});

module.exports = router;