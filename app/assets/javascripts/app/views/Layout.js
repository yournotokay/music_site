BobbyMusic.app.views.Layout = Backbone.View.extend({
  el: 'body',
  template: HandlebarsTemplates.layout,

  initialize: function(options) {
    this.contentViewClass = options.contentView;
  },

  render: function() {
    this.$el.html(this.template());
    this.renderSubview();
    return this;
  },

  renderSubview: function() {
    if(typeof this.contentView === 'undefined') {
      this.contentView = new this.contentViewClass({
        el: ".content-body"
      });
    }
    this.contentView.render();
  }
});
