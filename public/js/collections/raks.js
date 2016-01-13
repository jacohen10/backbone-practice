(function(){
  App.Collections.Raks = Backbone.Collection.extend({
    initialize:function(){
      console.log("new Raks collection Created ");
    },
    model: App.Models.Grumble,
    url: "/raks"
  });
})();
