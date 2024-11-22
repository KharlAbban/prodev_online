const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Ensure the path matches your db.json location
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors({
    origin: "https://prodev-psi.vercel.app/",
    credentials: true
}));

server.use(middlewares);
server.use(router);

module.exports = server;