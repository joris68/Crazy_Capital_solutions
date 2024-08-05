const {Firestore, Filter} = require('@google-cloud/firestore');
const serviceAccountKey = require('./go-de-internal-jgabrisch-946c49ad5cca.json');

const firestore = new Firestore({
    projectId: serviceAccountKey.project_id, 
    keyFilename: './go-de-internal-jgabrisch-946c49ad5cca.json' 
  });

module.exports.search = (req, res) => {
    console.log("startin to get back search results")
}