BobbyMusic.app.views.Music = Backbone.View.extend({
  template: HandlebarsTemplates.music,

  initialize: function() {
    this.model = new BobbyMusic.app.models.MusicList();

    _.bindAll(this, 'render');

    this.listenTo(this.model, "reset sync", this.render);

    this.model.fetch({
        error: function(m,r) {
          console.log("error");
          console.log(r.responseText);
        }
    });
  },

  render: function() {
    this.$el.html(this.template({ sections: this.model.toJSON() }));
    this._loadPlayers();
    return this;
  },

  _loadPlayers: function() {
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
