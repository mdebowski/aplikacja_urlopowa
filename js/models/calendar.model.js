App.Models.Calendar = Backbone.Model.extend({

    defaults:{
        name:"Vacation",
        selectedDays: [],
        year: moment().year(),
        month:"1"
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