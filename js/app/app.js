/*globals IronKingdoms, Ember*/

IK = Em.Application.create({
	LOG_TRANSITIONS: true
});

IK.Router.map(function () {
  this.resource('characters', { path: '/' });
});



// IK.Router.reopen({
//   rootURL: '/blog/'
// });

// IK.Router.map(function () {
// 	this.route("index", { path: "/" });
// 	this.route("character", { path: "/character/" });
// });
