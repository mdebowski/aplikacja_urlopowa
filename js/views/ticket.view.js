App.Views.Ticket = Backbone.View.extend({

	initialize: function()
	{
		console.log('TicketView init');
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
		this.render();
    },

    render: function() {
		console.log('Ticket render');

		var data = this.model.toJSON();


		/*var html = '<h1>'+data.name+'</h1>';
		html += '<p>Price: '+data.price+'</p>';
		html += '<p><button class="btn btn-success">Buy now</button></p>';
		*/

		var test = $('#template-ticket').text();
		var tojestfunkcja = _.template( test );
		var html = tojestfunkcja( data );
		this.$el.html( html ); // $(this.el).html('SIEMA');

    	return this; // zalecane 
    }


});