
/* Routers */
function getWindowLocation () {
    return (window.location.pathname.substring(window.location.pathname.indexOf('/') + 1)).toLowerCase() }

$.getScript('routers.js')

console.log(getWindowLocation())
/* Routers */