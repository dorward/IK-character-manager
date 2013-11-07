// IK.IndexController = Em.ArrayController.create({
// 	init: function () {
// 		console.log("Index Controller");
// 	}
// });

IK.CharactersController = Ember.ArrayController.extend({
	content: [],
	actions: {
		newCharacter: function () {
			var character = this.store.createRecord('character');
      		character.save();
      		this.target.transitionTo('editcharacter', character);
		}
	}
});

IK.EditcharacterController = Ember.ObjectController.extend({
	actions: {
		acceptChanges: function () {
			console.log(this.get('model'));
			this.get('model').save();
		}
	}
})