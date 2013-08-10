BobbyMusic.app.models.Music = Backbone.Model.extend({
  initialize: function(options) {
    this.set({file: options.url.replace(/^.*\//, '').replace('.mp3','')})
  }
});
