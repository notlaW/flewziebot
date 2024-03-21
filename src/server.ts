// Require the framework and instantiate it
import Fastify from 'fastify';

const { ADDRESS = '0.0.0.0', PORT = '3000' } = process.env;

const fastify = Fastify({
  logger: true,
});

// Declare a route
fastify.get('/healthcheck', function (request, reply) {
  reply.send({ healthy: true });
});

fastify.listen({ host: ADDRESS, port: parseInt(PORT, 10) }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
