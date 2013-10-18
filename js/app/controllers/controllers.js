// IK.IndexController = Em.ArrayController.create({
// 	init: function () {
// 		console.log("Index Controller");
// 	}
// });

IK.CharactersController = Ember.ArrayController.extend({
	content: [],
	init: function () {
		// Normally we would try to load these from localstorage
		// Create a couple of example characters to play with
		this.pushObject(IK.CharacterModel.create({
			id: 1,
			name: "Silus Murdoch",
			xp: 7
		}));
		this.pushObject(IK.CharacterModel.create({
			id: 2,
			name: "Cobb Scarrow",
			xp: 4
		}));
	}
});

