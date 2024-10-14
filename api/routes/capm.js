const express = require("express");
const http = require('http');
const router = express.Router();
const axios = require("axios");
/**
 * 
 * @param {*} req Express Request Object
 * @param {*} res Express Response Object
 */
router.post('/', (req, res) => {
    // first check if everything is there
    const [ASSET, BENCHMARK, STARTTIME, ENDTIME ] = Object.values(req.body);
    if(ASSET && BENCHMARK && STARTTIME && ENDTIME){
        // call API
        
        axios.post(`http://0.0.0.0:8000/pricing/capm?assetname=${ASSET}&benchmark=${BENCHMARK}&starttime=${STARTTIME}&endtime=${ENDTIME}`, {}).then((response) => {
            res.status(200);
            res.send(response.data);
        }).catch((error) => {
            console.error("Error calling pricing API:", error);
            res.status(500).send("Error fetching pricing data");
        })

    } else{
        res.status(400);
        res.send("Missing Parameters, not possible to price Asset correctly");
    }

});

module.exports = router;