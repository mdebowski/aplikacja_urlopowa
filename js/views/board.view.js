App.Views.Board = Backbone.View.extend({

	initialize: function()
	{
		console.log('BoardView init');
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
		this.render();
    },

    render: function() {
		console.log('Board render');

		var data = this.model.toJSON();


		/*var html = '<h1>'+data.name+'</h1>';
		html += '<p>Price: '+data.price+'</p>';
		html += '<p><button class="btn btn-success">Buy now</button></p>';
		*/

		var test = $('#template-wager').text();
		var tojestfunkcja = _.template( test );
		var html = tojestfunkcja( data );
		this.$el.html( html ); // $(this.el).html('SIEMA');

    	return this; // zalecane 
    },
    events: {
    	"click button": 'addItem'
    },
    addItem: function(){
    	alert('Działa!');
    }

});