var RakView = function(rak){
  this.rak = rak;
  this.$el = $("<div class='rak'></div>");
  this.render();
  $(".raks").append(this.$el);

};

RakView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.rakTemplate(self.rak));
  },
  rakTemplate: function(){
    var rak = this.rak;
    var html = $("<h3>");
    html.append(rak.body);
    return(html);
  }
};
