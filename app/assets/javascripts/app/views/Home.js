BobbyMusic.app.views.Home = Backbone.View.extend({
  el: 'body',
  template: HandlebarsTemplates.home,

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
