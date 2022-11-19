




var side = 50;
let grassArr = []
let grassEaterArr = []
let predatorArr = []
let flowerArr = []
let GrassAndFlowerEaterArr = []


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");

            }
            else if (matrix[y][x] == 4) {
                fill("pink");
            }

            else if (matrix[y][x] == 5) {
                fill("brown");
            }

            rect(x * side, y * side, side, side);


        }

    }


    
}