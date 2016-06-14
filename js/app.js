/**
 * boilerplate file to copy and paste as needed
 * full of comments, which could or not be taken out
 */

define([
    // These are path alias that we configured in our bootstrap
    'jquery', // lib/jquery/jquery
    'underscore', // lib/underscore/underscore
    'backbone', // lib/backbone/backbone
    'router',
    'common/app-model'
], function ($, _, Backbone, Router, appModel) {
    var initialize = function () {
        // we use old http because of PHP 5
        Backbone.emulateHTTP = true;
        
        appModel.fetch();
        $.ajaxSetup({
            statusCode: {
                401: function () {
                    // TODO: make some variables + i18n here
                    // Redirect to the login page.
                    window.location.replace('/#login');
                    var returnFragment = Backbone.history.fragment === 'login' ? 'home' : Backbone.history.fragment;
                    appModel.save({returnFragment: returnFragment});
                },
                403: function () {
                    // 403 -- Access denied
                    window.location.replace('/#denied');
                }
            }
        });
        // initialize localStorage
        Router.initialize();
    };

    return {
        initialize: initialize
    };
    // What we return here will be used by other modules
});