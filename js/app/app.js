/*globals IronKingdoms, Ember*/

IK = Em.Application.create({
	LOG_TRANSITIONS: true
});

IK.ApplicationAdapter = DS.FixtureAdapter.extend();


IK.Router.map(function () {
  this.resource('characters', { path: '/' });
});

IK.CharactersRoute = Ember.Route.extend({
  model: function () {
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
