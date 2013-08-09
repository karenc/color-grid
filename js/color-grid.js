(function($) {
    $(function() {
        window.currentColor = 'white';

        var Grid = Backbone.Model.extend({
            setColor: function(color) {
                this.color = color;
            }
        });

        var GridTable = Backbone.Collection.extend({
            model: Grid
        });

        var GridView = Backbone.View.extend({
            tagName: 'td',
            model: Grid,
            events: {
                'click': 'clickHandler'
            },
            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this, 'click', this.setColor);
            },
            clickHandler: function() {
                this.model.save({color: window.currentColor});
            },
            render: function() {
                this.$el.css('background-color', this.model.get('color'));
                return this;
            }
        });

        var AppView = Backbone.View.extend({
            tagName: 'tr',
            initialize: function() {
                this.grids = new GridTable();
                this.grids.bind('all', this.render, this);
                this.grids.fetch();
            },
            render: function() {
                this.$el.html('');
                this.grids.each(function(grid) {
                    this.$el.append(new GridView({model: grid}).render().el);
                }, this);
                return this;
            }
        });

        var app = new AppView();
        $('#color-grid').append(app.render().el);
    });

    Backbone.sync = function(method, model, options) {
        var xhr = options.xhr = $.ajax('cgi-bin/server.cgi?method=' + method, options);
        model.trigger('request', model, xhr, options);
        return xhr;
    };
})(jQuery);
