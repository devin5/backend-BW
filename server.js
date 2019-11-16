const express = require("express");
const configureMiddleware = require("./middleware/config-middle");
const authRouter = require("./Routes/authRouter.js");

const server = express();

configureMiddleware(server);

server.use("/api/auth", authRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hello From  Devin');
});

module.exports = server;
