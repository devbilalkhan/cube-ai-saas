// import mongoose, { Mongoose } from 'mongoose';

// const MONGODB_URL = process.env.MONGODB_URL;
// console.log("MONGODB_URL", MONGODB_URL);
// interface MongooseConnection {
//   conn: Mongoose | null;
//   promise: Promise<Mongoose> | null;
// }

// let cached: MongooseConnection = (global as any).mongoose

// if(!cached) {
//   cached = (global as any).mongoose = { 
//     conn: null, promise: null 
//   }
// }

// export const connectToDatabase = async () => {
//   if(cached.conn) return cached.conn;

//   if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

//   cached.promise = 
//     cached.promise || 
//     mongoose.connect(MONGODB_URL, { 
//       dbName: 'cubeai', bufferCommands: false 
//     })

//   cached.conn = await cached.promise;

//   return cached.conn;
// }

import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;
console.log("MONGODB_URL:", MONGODB_URL);

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  console.log("No cached connection found. Initializing cache...");
  cached = (global as any).mongoose = { 
    conn: null, promise: null 
  };
} else {
  console.log("Using existing cached connection.");
}

export const connectToDatabase = async () => {
  if (cached.conn) {
    console.log("Returning cached connection.");
    return cached.conn;
  }

  if (!MONGODB_URL) {
    console.error("Missing MONGODB_URL environment variable.");
    throw new Error('Missing MONGODB_URL');
  }

  if (!cached.promise) {
    console.log("No existing connection promise. Creating new connection promise...");
    cached.promise = mongoose.connect(MONGODB_URL, { 
      dbName: 'cubeai', bufferCommands: false 
    });
  } else {
    console.log("Using existing connection promise.");
  }

  try {
    cached.conn = await cached.promise;
    console.log("Database connection established and cached:", cached.conn);
  } catch (error) {
    console.error("Error establishing database connection:", error);
    throw error;
  }

  return cached.conn;
};
