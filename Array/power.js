// JavaScript source code
function power() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var j = y;
    var result = x;
    if (y == 0)
        result = 1;
    else if (y < 0) {
        j = y * -1;
        result = GetProduct(j, x);
        result = 1 / result;
    }
    else {
        result = GetProduct(j, x);
    }
    document.getElementById("powResult").value = result;
}

function GetProduct(j, x) {
    var result = x;
    while (j > 1) {
        result *= x; //result = result * x;
        j--;
    }
    return result;
}