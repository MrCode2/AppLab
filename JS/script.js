var multi = document.getElementById('multi')
var nav_body = document.getElementById('nav_body')
var burger = document.getElementById('burger')
burger.onclick = function () {
    burger.classList.add('active')
    nav_body.classList.add('fixed')
}
multi.onclick = function () {
    burger.classList.remove('active')
    nav_body.classList.remove('fixed')
}


var comp = document.getElementsByClassName('companies')[0];
comp.onclick = function () {
    this.classList.toggle('active')
}

var tel1 = document.getElementsByClassName('tel1')[0]
var tel2 = document.getElementsByClassName('tel2')[0]


var load = document.getElementById('loading')
function loading() {
    load.style.display = 'none';
}
