App.Router = Backbone.Router.extend({

  routes: {
    "album":"album",
    "contact": "contact",
    "displayYear/:year":"displayYear",
    "":"index"

    //"*album":"album"
    //"*actions": "defaultRoute"
    //"*actions": "index"
  },

    displayYear: function(year) {
        //alert('a');
        $('#contact').hide();
        $('#album').hide();
        $('#game').hide();
        //$('#game').removeClass('hide');
        //$('a[href="#"]').addClass('active') ;
        //$('#album_link').removeClass('active');
        //$('#contact_link').removeClass('active');
        //$('#home_link').addClass('active');

        $('#calendar').empty();

        calendar = new App.Models.Calendar();
        calendar.set('selectedDays', ['2013-01-05','2013-01-15','2013-01-20']);
        calendar.set('year', year);
        var calendarView = new App.Views.Calendar({ model: calendar, el: '#calendar' });

    },

    index: function() {
        //alert('a');
        $('#contact').hide();
        $('#album').hide();
        $('#game').show();
        //$('#game').removeClass('hide');
        //$('a[href="#"]').addClass('active') ;
        $('#album_link').removeClass('active');
        $('#contact_link').removeClass('active');
        $('#home_link').addClass('active');

        this.displayYear(moment().year());
  },

  album: function() {
   // alert('b')

    $('#contact').hide();
    $('#album').show();
    $('#game').hide();

   //$('#album').removeClass('hide');
   //$('a[href="#album"]').addClass('active') ;
     $('#home_link').removeClass('active');
     $('#contact_link').removeClass('active');
     $('#album_link').addClass('active');

      $('#calendar').empty();
     //alert(album);
  },

  contact: function() {
    //alert('c')
    //$('#contact').removeClass('hide');
    //$('a[href="#contact"]').addClass('active') ;
    $('#album_link').removeClass('active');
     $('#home_link').removeClass('active');
     $('#contact_link').addClass('active');

    $('#contact').show();
    $('#album').hide();
    $('#game').hide();

    $('#calendar').empty();
  }

});