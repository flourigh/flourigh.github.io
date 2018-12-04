
/* Routers */
function getWindowLocation () {
    return (window.location.pathname.substring(window.location.pathname.indexOf('/') + 1)).toLowerCase() }

var imported = document.createElement('script')
imported.src = 'routers.js'
document.head.appendChild(imported)

console.log(getWindowLocation())
/* Routers */