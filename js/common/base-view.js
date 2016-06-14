define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var BaseView = Backbone.View.extend({
        renderErrorFields: function (errors) {
            // show all errors
            this.hideErrorFields();
            _.each(errors, function (error) {
                var $messageElement = this.$('.js-' + error.field + '-label');
                var $wrapperElement = this.$('.js-' + error.field + '-wrapper');

                $messageElement.text(error.message)
                        .addClass('error-label')
                        .removeClass('hidden');
                $wrapperElement.addClass('has-error');
            });
        },
        hideErrorFields: function () {
            this.$('.has-error').removeClass('has-error');
            this.$('.error-label')
                    .addClass('hidden')
                    .text('')
                    .removeClass('error-label');
        },
        returnToFragment: function (navFragment) {
            var returnTo = navFragment || _.result(this, 'returnTo') || this.returnToError();
            Backbone.history.navigate(returnTo, true);
        },
        returnToError: function () {
            throw new Error('A "returnTo" property or function must be specified');
        }
    });
    return BaseView;
});