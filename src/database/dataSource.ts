import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config({ path: 'env/.env.dev' });

export const connectionSource = new DataSource({
  type: 'mysql',
  host: process.env.SQL_DB_HOST,
  port: parseInt(process.env.SQL_DB_PORT),
  username: process.env.SQL_DB_USERNAME,
  password: process.env.SQL_DB_PASSWORD,
  database: process.env.SQL_DB_NAME,
  logging: true,
  synchronize: false,
  entities: ['src/**/*.schema.ts'],
  migrations: ['src/database/migrations/*.ts'],
});
