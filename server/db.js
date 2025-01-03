import { Pool } from "pg";
import logger from "./utils/logger";
import dotenv from 'dotenv';

dotenv.config(); 

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, 
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionTimeoutMillis: 10000,
  ssl: { rejectUnauthorized: false },
});

export const connectDb = async () => {
  let client;
  try {
    client = await pool.connect();
    logger.info("Postgres connected to %s", client.database);
  } catch (err) {
    logger.error("%O", err);
    process.exit(1);
  } finally {
    client && client.release();
  }
};

export const disconnectDb = () => pool.end();

export default {
  query: (...args) => {
    logger.debug("Postgres querying %O", args);
    return pool.query.apply(pool, args);
  },
};
