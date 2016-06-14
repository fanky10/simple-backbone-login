define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/home-template.html'
], function ($, _, Backbone, viewTemplate) {
    var HomeView = Backbone.View.extend({
        initialize: function (options) {
            this.template = _.template(viewTemplate);
        },
        render: function () {
            this.$el.html(this.template());
        }
    });
    return new HomeView();
});