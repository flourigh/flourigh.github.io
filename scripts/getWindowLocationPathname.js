
/* Routers */
function getWindowLocation () {
    return (window.location.pathname.substring(window.location.pathname.indexOf('/') + 1)).toLowerCase() }

$.getScript("routers.js", function () {
   console.log("Script loaded but not necessarily executed.")
})

console.log(getWindowLocation())
/* Routers */