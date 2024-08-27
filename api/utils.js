
const { MongoClient } = require('mongodb');

function connectToMongo(){
  try {
    const client = new MongoClient(uri);
    client.connect();
    const db = client.db('crazy_capital');
    return [db, client];
  } catch (error) {
    console.error('Connection to MongoDB Atlas failed!', error);
  }
}

module.exports = connectToMongo;