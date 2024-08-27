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
    const ASSET = req.body.asset;
    const BENCHMARK = req.body.benchmark;
    const STARTTIME = req.body.starttime;
    const ENDTIME = req.body.endtime;
    if(ASSET && BENCHMARK && STARTTIME && ENDTIME){
        // call API
        
        axios.post(`http://localhost:8000/pricing/capm?assetname=${ASSET}&benchmark=${BENCHMARK}&starttime=${STARTTIME}&endtime=${ENDTIME}`, {}).then((response) => {
            res.status(200);
            res.send(response.data);
        }, (error) => {
            res.status(400);
            res.send(error);
        })

    } else{
        res.status(400);
        res.send("Missing Parameters, not possible to price Asset correctly");
    }

});

module.exports = router;