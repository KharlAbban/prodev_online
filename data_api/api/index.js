const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure the path matches your db.json location
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;