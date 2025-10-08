const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://euUser:a123456@cluster0.x32bb8m.mongodb.net/';

const db = null;

const client = new MongoClient(url);

async function connect(){
    try{
        await client.connect();
        return client.db('agenda')
    } catch(error){
        console.error('Não foi possível conectar com o banco de dados.');
    }
}

module.exports = connect ;