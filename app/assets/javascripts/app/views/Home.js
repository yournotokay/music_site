BobbyMusic.app.views.Home = Backbone.View.extend({
  template: HandlebarsTemplates.home,

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
