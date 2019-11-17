const express = require("express");
const configureMiddleware = require("./middleware/config-middle");
const authRouter = require("./routes/authRouter.js");
const songsRouter = require('./routes/songsRouter')
const restricted = require('./middleware/restricted');

const server = express();

configureMiddleware(server);

server.use("/api/auth", authRouter);
server.use('/api/songs', restricted, songsRouter);

server.get('/', (req, res) => {
    res.send('<h1>Hello From  Devin');
});

module.exports = server;
