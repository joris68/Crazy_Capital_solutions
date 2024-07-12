const {Firestore} = require('@google-cloud/firestore');
const bcrypt = require('bcrypt');

const serviceAccountKey = require('./go-de-internal-jgabrisch-946c49ad5cca.json');

const firestore = new Firestore({
    projectId: serviceAccountKey.project_id, 
    keyFilename: './go-de-internal-jgabrisch-946c49ad5cca.json' 
  });


const saltRounds = 5;


module.exports.registerUser = (req, res) => {
    console.log("starting to register another user");
    const collectionReference = firestore.collection('users');
    console.log("database connection estab.");

    if(!validateUserJson(req)) res.status(400).end("Not valid Input");

    const passwordPlaintext = req.body.password;

    bcrypt.hash(passwordPlaintext, saltRounds).then(hashedPassword => {
        console.log("hash wa created");

        const newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password : hashedPassword
        }
        // inserting into the collection
        collectionReference.add(newUser).then(()=> {
            console.log(`${firstName} ${lastName} successfully inserted into the database`);
            res.status(200).end("successfully registered the user");
        }).catch((err) => {
            console.log(err);
            res.status(400).end("could not add user to the database");
    });
    }).catch((err) => {
        console.log(err);
        res.status(400).end(err);
    });
}

function validateUserJson(requestObject){
    if(typeof requestObject.body.firstName === "string" && typeof requestObject.body.lastName === "string" && typeof requestObject.body.email === "string"
        && requestObject.body.password === "string") {
        return true;
     }

     return false;

}