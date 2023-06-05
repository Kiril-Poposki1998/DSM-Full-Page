(async () => {
    var response = await fetch('http://dsm.local/nav/',{cache: "no-store"});
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
    var response = await fetch('http://dsm.local/footer/',{cache: "no-store"});
    switch (response.status) {
        case 200:
            var template = await response.text();
            var dev_footer = document.getElementById("footer");
            dev_footer.innerHTML = template;
            break;
        case 404:
            console.log('Footer Not found');
            break;
    }
})();

(async () => {
    var response = await fetch('http://dsm.local/main',{cache: "no-store"});
    switch (response.status) {
        case 200:
            var template = await response.text();
            var div_main = document.getElementById("main_page");
            div_main.innerHTML = template;
            break;
        case 404:
            console.log('Main Page not found');
            break;
    }
})();