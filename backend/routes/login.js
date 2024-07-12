const {Firestore, Filter} = require('@google-cloud/firestore');
const bcrypt = require('bcrypt');
const serviceAccountKey = require('./go-de-internal-jgabrisch-946c49ad5cca.json');

const firestore = new Firestore({
    projectId: serviceAccountKey.project_id, 
    keyFilename: './go-de-internal-jgabrisch-946c49ad5cca.json' 
  });


module.exports.loginUser = (req, res) => {

    console.log("starting to execute the login function");

    let collectionRef = firestore.collection('users');
    console.log("we could build a DB conn");
    let emailAdress = req.body.emailAdress;
    let passwordPlaintext = req.body.password;
    let dbFilter = Filter.where('email', '==', emailAdress);

    collectionRef.where(dbFilter).get().then(querySnapshot => {
        if(querySnapshot.size > 1) throw new Error("Duplicate Email adresses");
        if (querySnapshot.empty()) res.status(400).end("Not a user with the specified email address");

        // compare , array of the snapshot should be one
        let docs = querySnapshot.docs;

        bcrypt.compare(passwordPlaintext, hash).then(function(result) {
            console.log("hashins passwords right now");
            if (result === docs[0].password) {
                console.log("hash was found in the database");
                res.status(200).end(`User successfully logged into the application`);
            }
            res.status(400).end("No user found with the provided credentials");
        }).catch(err => console.log(err));
            
    }).catch(err => {
            console.log(err)
    });


}

