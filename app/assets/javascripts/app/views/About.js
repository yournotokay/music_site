BobbyMusic.app.views.About = Backbone.View.extend({
  template: HandlebarsTemplates.about,

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});
