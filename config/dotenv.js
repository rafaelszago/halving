import dotenv from 'dotenv';

dotenv.load({
  path: process.env.ENV_PATH || '.env'
});
