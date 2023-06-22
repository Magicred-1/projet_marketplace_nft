import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Add Mongo URI to .env.local')
}

try {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
    console.log('The connection to the database was successful');
}
catch (e) {
    console.error(e);
}

export default clientPromise