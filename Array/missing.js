// JavaScript source code
function displayMissing() {
    var arrMissing = document.getElementById("arrMissing").value.split('');
    var min = Math.min.apply('', arrMissing);
    var max = Math.max.apply('', arrMissing);
    var missing = [];
    while (min < max) {
        min++;
        if (arrMissing.indexOf(min.toString()) == -1)
            missing.push(min);
    }
    document.getElementById("missing").innerHTML = missing;
}