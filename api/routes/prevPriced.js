const express = require("express");
const router = express.Router();
const { connectToMongo } = require("../utils.js");

router.get('/', (req, res) => {
    try{
        const [db, client]  = connectToMongo();
        const collection = db.collection('pricedAssets');
        // here we can just get all documents in the priced database and order it
        // ia timestamp
        const resultArray = collection.find({}).toArray();
        if (resultArray.length > 5) {
            console.error("There are to many documents in the collection");
            resultArray = resultArray.slice(0, 5);
        }

        res.status(200);
        res.send(resultArray);

    } catch (error) {
        console.log("Could not get prev priced assets: " + error);
        res.status(400);
        res.send("Could not get previously Priced Assets");

    } finally {
        client.close();
    }
});

module.exports = router;