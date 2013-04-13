$(function() {

    //App.Calendar.createMonth(2013,0);
	GameBoard.create();

	//item.children('.btn').bind('click', function() {
	$('#buttons button').bind('click', function() {
		//alert('siema' + $(this).text());

		var selected_count = $('#buttons .btn-primary').length;

		// alert('length = ' + selected_count);
		if ((selected_count < 6) || ($(this).hasClass('btn-primary'))) {
			$(this).toggleClass('btn-primary');
		}
	});

	$('#buynow-modal').on('show', function () {

		var modal = $('#buynow-modal .modal-body');

		modal.empty();

		$('#buttons .btn-primary').each(function() {

			var text = $(this).text();

			var item = $('<button class="btn">'+text+'</button>');

			modal.append(item);
		});

	});

	$('#losuj').bind('click', function() {
		// alert('test');

		$('#buttons button').removeClass('btn-success btn-danger');

		var lotto = [];

		while (lotto.length < 6)
		{
			var test = Math.round(Math.random() * 49)+1;
			var warunek = $.inArray(test, lotto);

			if (warunek == -1) { // jeżeli wylosowanej liczby nie ma w tablicy
				lotto.push(test);// to ją dodajemy

				var btn = $('#btn-'+test);
				var nameClass = (btn.hasClass('btn-primary')) ? 'btn-success' : 'btn-danger';
				btn.addClass( nameClass );
			}
		};
	});

	$('#sprawdz').bind('click', function(){
		//alert('test');

		var request = $.ajax({
			url: 'http://www.lotto.pl',
			crossDomain: true,
			dataType: 'html',
			error: function(error) {
				alert('error');
			},
			success: function(data)
			{
				alert('success!');
				//console.log(data);

				var test = $(data).find('#block-block_wyniki-0 .glowna_wyniki_lotto').text();
				console.log(test);
			}
		});

	});

	wager = new App.Models.Wager({ name: 'Bingo' });
	wager.set('price', 100);
	wager.set('selections', [10,20,30,45,49] );

	boardView = new App.Views.Board({ model: wager, el: '#wyniki' });
	ticketView = new App.Views.Ticket({ model: wager, el: '#ticket'});


	App.album  = new App.Collections.Album();

	for (var i = 0; i <10; i++) {
		var song = new App.Models.Song({ name: 'title'+i, length: 'length'+1, artist: 'Artist'+i });
			App.album.add(song)
	}

	App.albumView = new App.Views.Album({collection: App.album, el:'#album'});


	App.profile = new App.Models.Profile({id:100});


	App.profile.fetch({
		success: function(model,response,options){

		},
		error: function(model,xhr,options){

		}
	});


	//App.profile.save();
	App.router = new App.Router();

	/*App.router.on('route:defaultRoute', function (actions) {
		alert( actions );
	});*/

	Backbone.history.start();

	// usage
	navigator.geolocation.watchPosition(function(pos){
	  console.log("I'm located at ",pos.coords.latitude,' and ',pos.coords.longitude);
	  var temp = pos.coords.latitude+','+pos.coords.longitude;
	  var link = 'http://maps.googleapis.com/maps/api/staticmap?center='+temp+'&zoom=13&size=400x300&sensor=false';
	  

	  $('#contact div img').attr('src', link);

	  console.log(link); 
	});

/*
    calendar = new App.Models.Calendar();
    //console.log(calendar);
    calendar.set('selectedDays', ['2013-01-05','2013-01-15','2013-01-20']);
    calendarView = new App.Views.Calendar({ model: calendar, el: '#calendar' });
*/

});