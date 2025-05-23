import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  // Use a global variable in development to preserve connection across HMR
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, create a new client for every request
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

/**
 * Helper to get MongoDB database instance
 * @param {string} dbName - Database name, fallback to env variable
 */
export async function getDatabase(dbName = process.env.MONGODB_DB) {
  const client = await clientPromise;
  return client.db(dbName);
}

export default clientPromise;
