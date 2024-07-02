// lib/mongodb.ts
import type { MongoClientOptions } from 'mongodb';
import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

let client;
let clientPromise: Promise<MongoClient>;

export const connectDB = async () => {
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable so the client is not recreated with each hot reload
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production mode, it's best to not use a global variable
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
  return clientPromise;
};
