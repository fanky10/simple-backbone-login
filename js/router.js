define([
    'jquery',
    'underscore',
    'backbone',
    'routerFilter',
    'common/app-model',
    'home/home-view',
    'user/user-login-view',
    'home/page-not-found-view'
], function ($, _, Backbone, Router, appModel, homeView, userLoginView, 
            notFoundView) {
    var AppRouter = Router.extend({
        routes: {
            '': 'renderHome',
            'login': 'renderLogin',
            'logout': 'logout',
            '*action': 'renderNotFound'
        },
        renderHome: function () {
            homeView.setElement($('.js-main-view')).render();
        },
        renderLogin: function () {
            userLoginView.setElement($('.js-main-view')).render();
        },
        renderNotFound: function () {
            notFoundView.setElement($('.js-main-view')).render();
        }
    });
    var initialize = function () {
        var appRouter = new AppRouter();
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});