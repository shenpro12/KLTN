const headerContainer = document.getElementById('header-container');
const logo = document.getElementById('logo-image');
window.addEventListener("scroll", function() {
    var x = pageYOffset;
    if (x > 80) {
        headerContainer.classList.add('dropdown')
        logo.src = "/img/logoscroll.png"
    } else if (x == 0) {
        headerContainer.classList.remove('dropdown')
        logo.src = "/img/logo.png"
    }

})