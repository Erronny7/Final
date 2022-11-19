
background('#acacac');
var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("."));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);

io.on('connection', function (socket) {

    for(var i in messages) {
    
    socket.emit("send matrix", matrix[i]);
    
    }
    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in predatorArr) {
        predatorArr[i].eat()
    }

    for (let i in flowerArr) {
        flowerArr[i].mul()
    }

    for (let i in GrassAndFlowerEaterArr) {
        GrassAndFlowerEaterArr[i].eat()
    }

    socket.on("send matrix", function (setup) {

        messages.push(setup);
        
        io.sockets.emit("display message", data);
        
        });
    
    
    });


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                let gr = new predator(x, y)
                predatorArr.push(gr)
            }
            else if (matrix[y][x] == 4) {
                let gr = new Flower(x, y)
                flowerArr.push(gr)
            }

            else if (matrix[y][x] == 5) {
                let gr = new GrassAndFlowerEater(x, y)
                GrassAndFlowerEaterArr.push(gr)
            }
        }
    }




Flower = require('./Flower.js');
Grass = require('./Grass.js');
GrassAndFlowerEater = require('./GrassAndFlowerEater.js');
GrassEater = require('./GrassEater.js');
living = require('./living.js');
predator = require('./predator.js');

