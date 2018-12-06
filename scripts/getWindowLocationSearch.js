
/* Routers */
function getWindowLocation () {
    return (window.location.search.substring(window.location.search.indexOf('?') + 1)).toLowerCase(); };

console.log(getWindowLocation());
/* Routers */