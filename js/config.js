var require = {
    urlArgs: 'bust=' + Math.random(), //avoids cache
    paths: {
        jquery: 'vendor/jquery.min',
        underscore: 'vendor/underscore.min',
        backbone: 'vendor/backbone.min',
        text: 'vendor/text',
        bootstrap: 'vendor/bootstrap.min',
        localstorage: 'vendor/backbone.localStorage.min',
        moment: 'vendor/moment-with-locales.min',
        routerFilter: 'vendor/backbone-async-route-filter-amd',
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        }
    }
};