<<<<<<< HEAD
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const { join } = require("path");

const app = express();

const port = process.env.SERVER_PORT || 3000;

app.use(morgan("dev"));
app.use(helmet());
app.use(express.static(join(__dirname, "build")));

app.listen(port, () => console.log(`Server listening on port ${port}`));
=======
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const Pusher = require('pusher');
const cors = require('cors');

const pusher = new Pusher({
    appId: '1079195',
    key: '753fa0e07c31c514709e',
    secret: 'bde7b5753f486cc750e7',
    cluster: 'us2',
    encrypted: true
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message/send', (req, res) => {
    pusher.trigger( 'private-chatapp', 'messages', {
        message: req.body.message,
        username: req.body.username
    });
    res.sendStatus(200);
});

app.post('/pusher/auth', (req, res) => {
    console.log('POST to /pusher/auth');
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
>>>>>>> 9d3b7e9e201792a2f81102f38cf0a81bedf6e87f
