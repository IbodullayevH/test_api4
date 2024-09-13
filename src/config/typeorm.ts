import { Users } from "../entity/index";
import dotenv from "dotenv";
dotenv.config();
import { DataSource } from 'typeorm';
// import { User } from "@entity"

const typeormConfig = new DataSource({
  type: process.env.TYPE as "postgres",
  host: process.env.DB_HOST,  // Host
  port: Number(process.env.DB_PORT),  // Port
  username: process.env.DB_USERNAME,  // Foydalanuvchi nomi
  password: process.env.DB_PASSWORD,  // Parol
  database: process.env.DB_NAME,  // Bazaning nomi
  ssl: {
    rejectUnauthorized: false  // SSL sozlamasi
  },
  entities: [Users],
  synchronize: false,
  logging: false,
});

export { typeormConfig };
