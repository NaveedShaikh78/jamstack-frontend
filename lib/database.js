import { MongoClient, Db, Collection } from 'mongodb';
import mongoose from 'mongoose'
let client = null;

const getDatabase = async () => {
    // if (!client) {
    //     console.log('Connecting to database', process.env.MongoDBUrl);
    //     client = await MongoClient.connect(process.env.MongoDBUrl, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     });
    // }
    // return client.db();
    await mongoose.connect(process.env.MongoDBUrl);
};

const getCollection = async (name) => {
    const database = await getDatabase();
    return database.collection(name);
};

export { getCollection, getDatabase };