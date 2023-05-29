(async () => {
    var response = await fetch('http://dsm.local/nav/');
    switch (response.status) {
        case 200:
            var template = await response.text();
            var div_navbar = document.getElementById("navbar");
            div_navbar.innerHTML = template;
            break;
        case 404:
            console.log('Navbar Not found');
            break;
    }
})();

(async () => {
    var response = await fetch('http://dsm.local/footer/');
    switch (response.status) {
        case 200:
            var template = await response.text();
            var div_navbar = document.getElementById("footer");
            div_navbar.innerHTML = template;
            break;
        case 404:
            console.log('Footer Not found');
            break;
    }
})();