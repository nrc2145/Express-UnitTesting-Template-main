/* eslint-disable node/no-unpublished-import */
import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const main = async () => {
  try {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () =>
      console.log(`Sevidor esperando por peticiones en localhost:${PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
};

main();
