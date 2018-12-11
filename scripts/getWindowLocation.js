    /* getWindowLocation */
    function getWindowLocation () {
        if(window.location.pathname.substring(window.location.pathname.indexOf('/') + 1).toLowerCase()) {
            return window.location.pathname.substring(window.location.pathname.indexOf('/') + 1).toLowerCase()
        } else if (window.location.search.substring(window.location.search.indexOf('?') + 2).toLowerCase()) {
            return window.location.search.substring(window.location.search.indexOf('?') + 2).toLowerCase()
        } else if (window.location.search.substring(window.location.search.indexOf('?') + 1).toLowerCase()) {
            return window.location.search.substring(window.location.search.indexOf('?') + 1).toLowerCase()
        } else { return '' }
    }
    /* getWindowLocation */