App.Views.Rak = Backbone.View.extend({
  tagName: "div",
  className: "rak",


  events: {
    // 'click .edit': 'renderEditForm',
    // 'click .cancel': 'render',
    // 'click .submit': 'updateGrumble',
    // 'click .delete': 'deleteGrumble',
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);

    this.template = Handlebars.compile($("#rakTemplate").html());
    // this.editTemplate = Handlebars.compile($("#grumbleFormTemplate").html())
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }

});
