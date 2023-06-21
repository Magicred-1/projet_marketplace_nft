import { MongoDB } from "mongodb";

const { MongoClient } = MongoDB;

const MONGODB_URI = process.env.MONGODB_URI;

const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

export default client;