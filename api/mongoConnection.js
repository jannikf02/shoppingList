const { MongoClient } = require("mongodb");
const url = "mongodb://usl:DasistkeingutesPasswort@10.0.0.203:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false"

// Database Name
const collectionName = 'usl';

async function main() {
    // Use connect method to connect to the server
    const client = connection();
    await client.connect();
    console.log('MONGODB: Connected successfully to server');
    client.close();

}

main();

function connection() {
    return new MongoClient(url);
}

async function remove(col, json) {
    const client = connection();
    await client.connect();
    const db = client.db(collectionName);
    const collection = db.collection(col);
    const result = await collection.deleteMany(json);
    client.close();
    return result;
}

async function update(col, select, set) {
    const client = connection();
    await client.connect();
    const db = client.db(collectionName);
    const collection = db.collection(col);
    const result = await collection.updateOne(select, { $set: set });
    client.close();
    return result;
}
async function get(col, select) {
    const client = connection();
    await client.connect();
    const db = client.db(collectionName);
    const collection = db.collection(col);
    const result = await collection.find(select).toArray();
    client.close();
    return result;

}

async function insert(col, insert) {
    const client = connection();
    await client.connect();
    const db = client.db(collectionName);
    const collection = db.collection(col);
    const result = await collection.insertMany([insert]);
    client.close();
    return result;
}

module.exports = { insert, get, update, remove };