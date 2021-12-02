const MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";
let dbName = 'performanceTesting';
/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
let results = []
const filter = {
  'Environment': 'QA'
};

async function findOne() {
    let collectionName = 'EWM Data'

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db(dbName);

        let collection = db.collection(collectionName);
        let filter = { Environment: "QA" };

        let res = await collection.find(filter);
      
       return res;

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

console.log(findOne().then(val => console.log(val)));