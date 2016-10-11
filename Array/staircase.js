// JavaScript source code
function displayStaircase() {
    var n = document.getElementById("height").value;
    var str = "";
    for (var i = 0; i <= n; i++) {
        //str += "<span>";
        for (var j = 0; j <= n; j++) {
            if (j >= n - i)
                str += "#";
            else
                str += "&nbsp;&nbsp;";
        }
        str += "<br />";
    }
    document.getElementById("staircase").innerHTML = str;
}
