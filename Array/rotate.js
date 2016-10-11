// JavaScript source code
function rotate() {
    var arrRotate = document.getElementById("arrRotate").value.split(",");
    var d = document.getElementById("keyrotate").value;
    var tempArr = [];
    for (let i = d; i < arrRotate.length; i++) {
        tempArr.push(arrRotate[i]);
    }
    for (let i = 0; i < d; i++) {
        tempArr.push(arrRotate[i]);
    }
    document.getElementById("rotate").innerHTML = tempArr;
}