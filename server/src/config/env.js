import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT, 
  jwtSecret: process.env.JWT_SECRET,
  databaseUrl: process.env.DATABASE_URL || process.env.MONGO_URI || '',
};

export default env;