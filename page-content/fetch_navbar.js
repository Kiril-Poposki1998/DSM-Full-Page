(async () => {
    var response = await fetch('http://localhost:8081');
    switch (response.status) {
        case 200:
            var template = await response.text();
            console.log(template);
            break;
        case 404:
            console.log('Navbar Not found');
            break;
    }
})();