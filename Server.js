var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("./TheGameofLife"));
app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3001);

grassArr = []
grassEaterArr = []
predatorArr = []
flowerArr = []
GrassAndFlowerEaterArr = []

matrix = []
Flower = require('./TheGameofLife/flower');
Grass = require('./TheGameofLife/grass');
GrassAndFlowerEater = require('./TheGameofLife/GrassAndFlowerEater');
GrassEater = require('./TheGameofLife/GrassEater');
living = require('./TheGameofLife/living');
predator = require('./TheGameofLife/predator');
matrix =   matrixGenerator(20, 40, 20, 20,20,10)
//background('#acacac');




function createObject(){
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
    
    
}

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,flowerCount,GrassAndFlowerEaterCount) {

    for (let i = 0; i < matrixSize; i++) {
    matrix[i] = []
    for (let o = 0; o < matrixSize; o++) {
    matrix[i][o] = 0;
    }
    }
    for (let i = 0; i < grassCount; i++) {
    let x = Math.floor(Math.random()* matrixSize);
    let y = Math.floor(Math.random()*matrixSize);
    matrix[y][x] = 1;
    }

    for (let i = 0; i < grassEaterCount; i++) {
    let x = Math.floor(Math.random()*matrixSize);
    let y = Math.floor(Math.random()*matrixSize);
    matrix[y][x] = 2;
    }
    for (let i = 0; i < predatorCount; i++) {
    let x = Math.floor(Math.random()*matrixSize);
    let y = Math.floor(Math.random()*matrixSize);
    matrix[y][x] = 3;
    }
    for (let i = 0; i < flowerCount; i++) {
      let x = Math.floor(Math.random()*matrixSize);
      let y = Math.floor(Math.random()*matrixSize);
      matrix[y][x] = 4;
      }
      for (let i = 0; i < GrassAndFlowerEaterCount; i++) {
        let x = Math.floor(Math.random()*matrixSize);
        let y = Math.floor(Math.random()*matrixSize);
        matrix[y][x] = 5;
        }
    return matrix;
    }

console.log(matrix)
  function game(){
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

    io.sockets.emit("display message", matrix);

}
   
setInterval(game, 1000)

io.on('connection', function (socket) {

   console.log("connected")
   createObject()
    });