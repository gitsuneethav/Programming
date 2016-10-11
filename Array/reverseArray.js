// JavaScript source code
function reverseArray() {
    var tempArr = document.getElementById("revArr").value;
    tempArr = [1, 2, 3, 4, 5];
    if (typeof (tempArr) == "string")
        tempArr = tempArr.split('');
    var arrLen = tempArr.length;
    var temp = 0;
    for (var i = 0; i < arrLen / 2; i++) {
        temp = tempArr[i];
        tempArr[i] = tempArr[arrLen - i - 1];
        tempArr[arrLen - i - 1] = temp;
    }
    document.getElementById("revResult").value = tempArr.join('');
    //return arr;    
}
