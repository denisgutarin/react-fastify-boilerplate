import { FastifyPluginCallback } from 'fastify';

const route: FastifyPluginCallback = (app, _, done) => {
  app.get('/', async () => {
    return { alive: true };
  });
  done();
};
export default route;
