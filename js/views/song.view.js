App.Views.Song = Backbone.View.extend({

	initialize: function()
	{
		console.log('SongView init');
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
		this.render();
    },

    render: function() {
		console.log('Song render');

		var data = this.model.toJSON();


/*		var html = '<p>'+data.name+'</p>';
		html += '<p>'+data.artist+'</p>';
		html += '<p><button class="btn btn-success">Play now</button></p>';
*/		
		

		var test = $('#template-song').text();
		var tojestfunkcja = _.template( test );
		var html = tojestfunkcja( data );



		this.$el.html( html ); // $(this.el).html('SIEMA');

    	return this; // zalecane 
    },

    events: {
    	"click button": "play",
    	"submit #contact-form": "sendContact"
    },

    play: function() {
    	var title = this.model.get('name');
    	alert(title);
    },

    sendContact: function() {
    	//alert('email='+ $("input[name='email']"));
    	alert('email');
    }

});