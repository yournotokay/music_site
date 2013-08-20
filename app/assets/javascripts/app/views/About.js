BobbyMusic.app.views.About = Backbone.View.extend({
  template: HandlebarsTemplates.about,

  initialize: function() {
    this.model = new BobbyMusic.app.models.AboutText();

    _.bindAll(this, 'render');

    this.listenTo(this.model, "reset sync", this.render);

    this.model.fetch();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$('.main-content').show();
    return this;
  }
});
