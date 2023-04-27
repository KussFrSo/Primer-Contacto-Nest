import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mariadb: {
      host: process.env.SQL_DB_HOST,
      port: parseInt(process.env.SQL_DB_PORT),
      name: process.env.SQL_DB_NAME,
      username: process.env.SQL_DB_USERNAME,
      password: process.env.SQL_DB_PASSWORD,
    },
  };
});
