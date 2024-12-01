/*import pg from "pg"
import dotenv from "dotenv"
dotenv.config()

const {Pool} = pg
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
})

export default db*/
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default prisma