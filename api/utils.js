

const admin = require('firebase-admin');

export function initConnection (){
    // Initialize the Firebase Admin SDK
    admin.initializeApp();
    
    // Configure the Firestore client to connect to the emulator
    admin.firestore().settings({
      host: 'localhost:8080', // Replace with your emulator's host and port
      ssl: false
    });
    
    const db = admin.firestore();

}


