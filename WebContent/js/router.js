App.Router = Backbone.Router.extend({

	routes: {
		"":"index"
	},

    index: function() {
   		App.calendar = new App.Models.Calendar();
		App.calendarView = new App.Views.Calendar({model: App.calendar, el:'#calendar'});

		App.users = new App.Collections.User();
		App.selectUserView = new App.Views.SelectUser({collection: App.users, el:'#selectUser'});
		App.users.fetch({
			success: function(model,response,options){
			},
			error: function(model,xhr,options){
				console.log('error'+model+' xhr='+xhr+' options='+options);
				alert('error');
			}//,async:false
		});
		
		App.rightPanel = new App.Models.RightPanel();
		App.rightPanelView = new App.Views.RightPanel({model: App.calendar, el:'#rightPanel'});
				
    }
});