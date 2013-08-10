BobbyMusic.app.views.Music = Backbone.View.extend({
  template: HandlebarsTemplates.music,

  initialize: function() {
    this.collection = new BobbyMusic.app.collections.MusicList();

    _.bindAll(this, 'render');

    this.listenTo(this.collection, "reset sync add remove", this.render);

    this.collection.fetch();
  },

  render: function() {
    console.log(this.collection.toJSON());
    this.$el.html(this.template({music: this.collection.toJSON()}));
    return this;
  }
});
