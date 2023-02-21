(async () => {
    var response = await fetch('http://localhost:8081');
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