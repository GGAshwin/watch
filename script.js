let h, m, s;
setInterval(() => {
    a = new Date();
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    if (h > 12) {
        h = h - 12;
    }
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}, 1000);