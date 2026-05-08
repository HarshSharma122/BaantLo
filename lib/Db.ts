import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("Please provide the mongodb_uri in env variable");
}



type ConnectionObject = {
  isConnected?: number;
};


const connection: ConnectionObject = {};
async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to db");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI || "");
    connection.isConnected = db.connections[0].readyState;
    console.log("Db connected successfully");
  } catch (error) {
    console.log("db connection failed", error);

    process.exit(1);
  }
}

export default dbConnect;
