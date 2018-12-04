
/* Routers */
function getWindowLocation () {
    return (window.location.search.substring(window.location.search.indexOf('?') + 1)).toLowerCase() }

var imported = document.createElement('script')
imported.src = 'routers.js'
document.head.appendChild(imported)

console.log(getWindowLocation())
/* Routers */