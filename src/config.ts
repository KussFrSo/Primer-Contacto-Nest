import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mariadb: {
      hots: process.env.SQL_DB_HOST,
      name: process.env.SQL_DB_NAME,
      username: process.env.SQL_DB_USERNAME,
      password: process.env.SQL_DB_PASSWORD,
    },
  };
});
