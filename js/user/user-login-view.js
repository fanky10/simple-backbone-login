define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/user/user-login-template.html',
    'common/app-model',
    'common/base-view'
], function ($, _, Backbone, viewTemplate, appModel, BaseView, UserLoginModel) {
    var UserLoginView = BaseView.extend({
        DEFAULT_RETURN_FRAGMENT: 'home',
        events: {
            'submit .js-login-form': 'submitLogin'
        },
        initialize: function () {
            this.template = _.template(viewTemplate);
        },
        render: function () {
            this.$el.html(this.template({
                title: 'Please Enter your data'
            }));
        },
        submitLogin: function (event) {
            if (event) {
                event.preventDefault();
            }
        }
    });
    return new UserLoginView();
});