BobbyMusic.app.views.About = Backbone.View.extend({
  template: HandlebarsTemplates.about,

  initialize: function() {
    this.model = new BobbyMusic.app.models.AboutText();

    _.bindAll(this, 'render');

    this.listenTo(this.model, "sync", this.render);

    this.model.fetch();
  },

  render: function() {
    var json = this.model.toJSON();
    if(!$.isEmptyObject(json)) {
      debugger
      this.$el.html(this.template(json));
      this.$('.main-content').show();
    }
    return this;
  }
});
