'use strict'

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

app.get('/', (_, res) => {
    res.render('index.ejs');
});

app.get('/admin', (_, res) => {
    res.render('admin.ejs');
})

io.on('connection', (socket) => {
    socket.on('trigger', function (option, msg) {
        if(option === "notice"){
            io.emit(option, msg);
        }else if(option === "timer"){
            io.emit(option);
        }else if(option === "poster"){
            io.emit(option);
        }
    })
})

http.listen(3000, function () {
    console.log('server on!!!');
})