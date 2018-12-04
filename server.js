// server.js

const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", function() {
    console.log("Listening on Port 3000");
});