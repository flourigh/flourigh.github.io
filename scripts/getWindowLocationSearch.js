
/* Routers */
function getWindowLocation () {
    return (window.location.search.substring(window.location.search.indexOf('?') + 1)).toLowerCase() }

$(document).ready(function() {
    $.getScript("routers.js", function () {
       console.log("Script loaded but not necessarily executed.")
    })
})

console.log(getWindowLocation())
/* Routers */