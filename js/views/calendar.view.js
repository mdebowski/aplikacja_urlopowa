App.Views.Calendar = Backbone.View.extend({

	initialize: function()
	{
		console.log('CalendarView init');
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
		this.render();
    },

    render: function() {
		console.log('Calendar render');

		var data = this.model.toJSON();


/*		var html = '<p>'+data.name+'</p>';
		html += '<p>'+data.artist+'</p>';
		html += '<p><button class="btn btn-success">Play now</button></p>';
*/		

        //var $tableMonth = App.Calendar.createMonth(data.year,data.month);
        //console.log($tableMonth);

        var $tableYear = App.Calendar.createYear(data.year);
/*
		var test = $('#template-calendar').text();
		var tojestfunkcja = _.template( test );
		var html = tojestfunkcja( data );
*/

        //var html = $tableMonth.html();
        var html = $tableYear.html();

		this.$el.html( html ); // $(this.el).html('SIEMA');

        _.each( data.selectedDays, function(item) {
            var btn = $('#btn-'+item);
            btn.addClass('btn-danger');
        });

/*
        var tblMonth = $("[id^='tbl-month-']");
        tblMonth.css("background-color","white");

        var thMonth = $("[id^='th-month-']");
        thMonth.css("background-color","#faf2cc");

        var tblYear = $("[id^='tbl-year-']");
        tblYear.css("background-color","#cccccc");

        //tblYear.css("cell-padding","5px");
        //tblYear.css("border","2px");
        //tblYear.addClass("table");

        console.log(tblYear);

        var trYear = $("[id^='tr-year-']");
        trYear.css("vertical-align","top");
*/

     	return this; // zalecane
    }/*,

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
*/
});