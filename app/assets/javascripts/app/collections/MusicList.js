BobbyMusic.app.collections.MusicList = Backbone.Collection.extend({
  url: 'http://s3-us-west-1.amazonaws.com/bobbyrosemusic.com',
  model: BobbyMusic.app.models.Music,

  parse: function (data) {
    var parsed = [];
    $(data).find('Key').each(function (index) {
      $key = $(this);
      if($key.text().match(".mp3$")) {
        parsed.push({url: "/" + $key.text()});
      }
    });

    return parsed;
  },

  fetch: function (options) {
    options = options || {};
    options.dataType = "xml";
    return Backbone.Collection.prototype.fetch.call(this, options);
  }
});
