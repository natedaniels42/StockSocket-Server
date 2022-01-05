const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
require('dotenv').config();
const PORT = process.env.PORT;

http.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));