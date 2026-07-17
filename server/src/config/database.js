import mongoose from "mongoose";
import env from './env.js';
export async function connectDatabase() {
  try {
    await mongoose.connect(env.databaseUrl);

    console.log("MongoDB conectado");

  } catch(error) {

    console.error(error);

    process.exit(1);
  }
}