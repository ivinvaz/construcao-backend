const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://euUser:a123456@cluster0.x32bb8m.mongodb.net/';

const client = new MongoClient(url);

async function conectarDB(){
    await client.connect();
    console.log('DB ON!');
    return client.db('agenda');
}

module.exports = conectarDB;