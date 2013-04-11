App.Models.Wager = Backbone.Model.extend({

    defaults:{
        name:"Lotto",
        selections: [],
		price: 40,
		duedate: "2013-03-16"
	}

	/*,toggleSelection: function(number) {

		var array = this.get('selections');
		var index = $.inArray( number, array );

		if (index == -1) // nie jest w tablicy
		{
			array.push( number );
		}
		else
		{
			array.splice(index, 1);
		}

		// wager.set('selections', array );

		this.set({'selections': array });
	}*/

});