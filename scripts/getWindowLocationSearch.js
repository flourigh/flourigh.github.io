
/* Routers */
function getWindowLocation () {
    return (window.location.search.substring(window.location.search.indexOf('?') + 1)).toLowerCase() }

$.getScript('routers.js')

console.log(getWindowLocation())
/* Routers */