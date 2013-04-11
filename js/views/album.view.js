App.Views.Album = Backbone.View.extend({

	initialize: function()
	{
		console.log('AlbumView init');
		_.bindAll(this, 'render');
		this.collection.bind('change', this.render);
		this.render();
    },

    render: function() {
		console.log('Album render');

		var data = this.collection.toJSON();

		console.log(data);

		this.$el.empty();
		this.$el.append('<h1>Album</h1>');

		var self = this;

		_.each (this.collection.models, function(song_model){
			var songView = new App.Views.Song({model: song_model});
			self.$el.append(songView.el);
		});


		/*var html = '<h1>'+data.name+'</h1>';
		html += '<p>Price: '+data.price+'</p>';
		html += '<p><button class="btn btn-success">Buy now</button></p>';
		*/

		//var test = $('#template-song').text();
		/*var tojestfunkcja = _.template( test );
		var html = tojestfunkcja( data );
		this.$el.html( html ); */ // $(this.el).html('SIEMA');

    	return this; // zalecane 
    }
    /*,

    events: {
    	"click button": 'addItem'
    },
    addItem: function(){
    	alert('Działa!');
    }
*/
});