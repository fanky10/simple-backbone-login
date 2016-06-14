define([
    'backbone',
    'localstorage'
], function (Backbone) {
    
    var AppModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage('AppModel'),
        defaults: {
            userToken: ''
        },
        isAuthorized: function () {
            return this.get('userToken') && this.get('userToken').length > 0;
        }
    });
    /**
     * Singleton Pattern
     */
    var instance = null;
    AppModel.getInstance = function(){
        if(instance === null){
            instance = new AppModel({id:1});
        }
        return instance;
    };

    return AppModel.getInstance();
});