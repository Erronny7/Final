var socket = io()


side = 50;


function draww(matrix) {
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
socket.on ('display message', draww);