define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/home/page-not-found.html',
    'common/base-view'
], function ($, _, Backbone, viewTemplate, BaseView) {
    var NotFoundView = BaseView.extend({
        initialize: function () {
            this.template = _.template(viewTemplate);
        },
        render: function () {

            var labels = {
                title: 'Opps!',
                notFound: '404 Not Found',
                details: 'Lo sentimos , ha ocurrido un error , la página solicitada no ha sido encontrada!',
                backToHome: ' Volver al Inicio'
            };
            this.$el.html(this.template({
                labels: labels
            }));
        }
    });
    return new NotFoundView();
});