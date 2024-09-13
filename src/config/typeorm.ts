import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();
import { Users } from '../entity';

const typeormConfig = new DataSource({
  type: process.env.TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: {
    rejectUnauthorized: false
  },
  entities: [Users], 
  synchronize: false,
  logging: false,
});

export { typeormConfig };
