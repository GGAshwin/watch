let h, m, s;
setInterval(() => {
    a = new Date();
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    document.getElementById('h').innerHTML = h;
    document.getElementById('m').innerHTML = m;
    document.getElementById('s').innerHTML = s;
}, 1000);