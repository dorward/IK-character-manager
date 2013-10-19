// IK.IndexController = Em.ArrayController.create({
// 	init: function () {
// 		console.log("Index Controller");
// 	}
// });

IK.CharactersController = Ember.ArrayController.extend({
	content: []
});

IK.CharacterController = Ember.ObjectController.extend({
	actions: {
		acceptChanges: function () {
			console.log(this.get('model'));
			this.get('model').save();
		}
	}
})