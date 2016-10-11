// JavaScript source code
function displayDuplicates() {
    var str = document.getElementById("dupText").value.split('');
    var hashMap = []; var dups = [];
    for (let i = 0; i < str.length; i++) {
        var temp = str[i];
        if (hashMap[temp] == undefined || hashMap[temp] == 0)
            hashMap[temp] = 1;
        else {
            var cnt = hashMap[temp];
            cnt++;
            hashMap[temp] = cnt;
            if (dups.indexOf(temp) == -1)
                dups.push(temp);
        }
    }
    document.getElementById("dups").innerHTML = dups;
}