BobbyMusic.app.views.Music = Backbone.View.extend({
  template: HandlebarsTemplates.music,

  initialize: function() {
    this.collection = new BobbyMusic.app.collections.MusicList();

    _.bindAll(this, 'render');

    this.listenTo(this.collection, "reset sync add remove", this.render);

    this.collection.fetch();
  },

  render: function() {
    this.$el.html(this.template({music: this.collection.toJSON()}));
    this._loadPlayers(this.collection.toJSON());
    return this;
  },

  _loadPlayers: function(musicList) {
    self = this;
    this.$('a').flowplayer("http://releases.flowplayer.org/swf/flowplayer-3.2.5.swf",{

      onError: function(e)
      {
          alert("Error: (code:"+e+").");
      },

      plugins: {
        controls: {
          fullscreen: false,
          height: 30,
          autoHide: false
        }
      },

      clip: {
        autoPlay: false,
      },

      onStart: function() {
        self._stopOtherPlayers(this);
      },

      onResume: function() {
        self._stopOtherPlayers(this);
      }
    });
  },

  _stopOtherPlayers: function(currentPlayer) {
    this.$('a').flowplayer().each(function() {
      if(this != currentPlayer) {
        this.pause();
      }
    });
  }
});
