App.Models.Profile = Backbone.Model.extend({

    defaults:{
        name:"Imie",
        lastname:"Nazwisko",
		email: "adres@com.pl"
	},
	urlRoot: App.API+'/profile'
})