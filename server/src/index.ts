import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import autoLoad from 'fastify-autoload';
import fastify from 'fastify';

const app = fastify({ logger: true });

app.register(autoLoad, {
  dir: join(__dirname, 'routes'),
  dirNameRoutePrefix: true,
});

const start = async () => {
  try {
    await app.listen(3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
