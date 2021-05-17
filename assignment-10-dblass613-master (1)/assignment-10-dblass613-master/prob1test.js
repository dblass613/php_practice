function start() {
    var res = document.getElementById("res"),
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        str = "",
        a,
        i;
    try {
        a = arr.splitEqual(3);
        for (i = 0; i < a.length; i++)
            str += "[" + a[i] + "]<br />\n";
        res.innerHTML = str;
    }
    catch (e) {
        alert(e.message)
    }
}
