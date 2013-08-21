BobbyMusic.app.views.Music = Backbone.View.extend({
  template: HandlebarsTemplates.music,

  initialize: function() {
    this.model = new BobbyMusic.app.models.MusicList();

    _.bindAll(this, 'render');

    this.listenTo(this.model, "sync", this.render);

    this.model.fetch({
        error: function(m,r) {
          console.log("error");
          console.log(r.responseText);
        }
    });
  },

  render: function() {
    var json = this.model.toJSON();
    if(!$.isEmptyObject(json)) {
      this.$el.html(this.template({ sections: json }));
      this.$('.main-content').show();
      this._loadPlayers();
    }
    return this;
  },

  _loadPlayers: function() {
    this.$(".player").mb_miniPlayer({
      skin: 'red',
      addShadow: true,
      swfPath: "/assets/Jplayer.swf"
    });
  }
});
