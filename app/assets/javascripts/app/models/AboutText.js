BobbyMusic.app.models.AboutText = Backbone.Model.extend({
  url: '/assets/about.txt',

  parse: function(data) {
    var paragraphs = data.split(/[\r\n]+/);

    return { about: "<p>" + paragraphs.join("</p><p>") + "</p>" };
  },

  fetch: function(options) {
    options = options || {};
    options.dataType = "text";
    return Backbone.Model.prototype.fetch.call(this, options);
  }
});
