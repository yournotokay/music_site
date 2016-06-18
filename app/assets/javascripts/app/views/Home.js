BobbyMusic.app.views.Home = Backbone.View.extend({
  template: HandlebarsTemplates.home,

  render: function() {
    this.$el.html(this.template());
    this.renderSubviews();
    return this;
  },

  renderSubviews: function() {
    if(typeof this.musicView === 'undefined') {
      this.musicView = new BobbyMusic.app.views.Music({
        el: ".music-container"
      });
    }
    this.musicView.render();

    if(typeof this.aboutView === 'undefined') {
      this.aboutView = new BobbyMusic.app.views.About({
        el: ".about-container"
      });
    }
    this.aboutView.render();
  }
});
