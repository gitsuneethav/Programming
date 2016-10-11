// JavaScript source code
function findPivot() {
    var sortedArr = document.getElementById("arrSorted").value.split(',');
    var key = document.getElementById("key").value;
    var len = sortedArr.length - 1;     
    binarySearch(sortedArr, 0, len, key);    
}

function binarySearch(arr, low, high, key) {
    var len = low + high;
    var mid;
    if (len % 2 > 0)
        mid = (len + 1) / 2;
    else
        mid = len / 2;
    if (parseInt(arr[mid]) == parseInt(key))
        return mid;
    else if (parseInt(key) > parseInt(arr[low]) || parseInt(key) < parseInt(arr[mid]))
        binarySearch(arr, low, mid, key);
    else
        binarySearch(arr, mid, high, key);
}