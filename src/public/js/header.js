var headerContainer = document.getElementById('Hcontainer');
var header = document.getElementById('header');
var logoImage = document.getElementById('logo-image');
var menu = document.getElementById('menu-text');
var login = document.getElementById('login-text');
var seach = document.getElementById('seach-text');
window.addEventListener("scroll", function() {
    var x = pageYOffset;
    if (x > 150) {
        headerContainer.style.backgroundColor = "white";
        headerContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)"
        header.style.color = "rgb(121, 118, 118)";
        headerContainer.classList.add('dropdown')
        logoImage.src = "/img/logoscroll.png";
        menu.style.color = "rgb(121, 118, 118)";
        login.style.color = "rgb(121, 118, 118)";
        seach.style.color = "rgb(121, 118, 118)";

    } else {
        headerContainer.style.backgroundColor = "transparent";
        headerContainer.style.boxShadow = "none"
        header.style.color = "white";
        logoImage.src = "/img/logo.png"
        menu.style.color = "white";
        login.style.color = "white";
        seach.style.color = "white";
        headerContainer.classList.remove('dropdown')
    }

})