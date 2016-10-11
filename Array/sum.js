// JavaScript source code
function largestSum() {
    var sumArr = document.getElementById("arrSum").value.split(",");
    var max = 0;
    //Method 1
    for (let i = 0; i < sumArr.length; i++) {
        for (let j = i + 1; j < sumArr.length; j++) {
            if (parseInt(sumArr[i]) + parseInt(sumArr[j]) > max)
                max = parseInt(sumArr[i]) + parseInt(sumArr[j]);
        }
    }
    document.getElementById("sum").innerHTML = max;
}