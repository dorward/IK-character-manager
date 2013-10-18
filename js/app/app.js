/*globals IronKingdoms, Ember*/

IK = Em.Application.create({
	LOG_TRANSITIONS: true
});

IK.ApplicationAdapter = DS.FixtureAdapter.extend();


IK.Router.map(function () {
  //this.resource('characters', { path: '/' });
  this.resource('characters', { path: "/" }, function () {
  	this.resource('character', { path: "/:character_id"});
  });
});

IK.CharactersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('character');
  }
});

IK.CharacterRoute = Ember.Route.extend({
  model: function (params) {
  	console.log("Character root", params, this);
  	console.log("Store", this.store);
  	console.log("Character", this.store.find('character', 2).then(function (character) {
  		console.log(character.get('name'));
  	}));
    return this.store.find('character');
  }
});


// IK.CharactersRoute = Ember.Route.extend({
//   model: function() {
//     console.log(this.get("content"));
//   }
// });

// IK.Router.reopen({
//   rootURL: '/blog/'
// });

// IK.Router.map(function () {
// 	this.route("index", { path: "/" });
// 	this.route("character", { path: "/character/" });
// });
