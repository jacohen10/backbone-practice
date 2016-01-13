(function(){
  App.Models.Rak = Backbone.Model.extend({
    urlRoot: "/raks",
    initialize: function(){
      console.log("New Rak Model Created");
    }
  });
})();


// var Rak = function(info){
//   this.body = info.body;
//   this.id = info.id;
// };
//
// Rak.fetch = function(){
//   var url = "http://localhost:4000/raks";
//   var request = $.getJSON(url).then(function(response){
//     var raks = [];
//     for(var i = 0; i < response.length; i++){
//       raks.push(new Rak(response[i]));
//     }
//     return raks;
//   }).fail(function(response){
//     console.log("js failed to load");
//   });
//   return request;
// };
