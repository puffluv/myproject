import { env } from 'process';

export default () => ({
  port: env.PORT,
  db_port: env.DB_PORT,
  db_name: env.DB_NAME,
  db_user: env.DB_USER,
  db_password: env.DB_PASSWORD,
  db_host: env.DB_HOST,
  secret_jwt: env.SECRET,
  expire_jwt: env.EXPIRE_JWT,
  refresh_secret: env.REFRESH_SECRET,
  expire_refresh_jwt: env.EXPIRE_REFRESH_JWT,
});
