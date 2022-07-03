const express = require("express");
const cors = require("cors");
var Axios = require("axios");
var qs = require("qs");
const Ide = express();
const PORT = 8000;
const bodyParser = require('body-parser');
Ide.use(bodyParser.json());
 
Ide.use(cors());
Ide.use(express.json());
 
Ide.post("/Ide", (req, res) => {
    //getting the required data from the request
    let code = req.body.code;
    let language = req.body.language;
    let input = req.body.input;
 
    if (language === "python") {
        language="py"
    }   
 
    let data = ({
         
            'source': code,
            'lang': language,
            'input': input
            
    });
    var config = {
        method: "post",
        url: "https://api.hackerearth.com/v4/partner/code-evaluation/submissions/",
        headers: {
            'Content-Type': 'application/json',
            'client-secret': '100c4cdce5f41317ea40f67ede60f6ee0e58a4af'
        },
        data: data,
    };
    
    //calling the code compilation API
    Axios(config)
        .then((response)=>{
            res.send(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error);
        });
})
 
Ide.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

