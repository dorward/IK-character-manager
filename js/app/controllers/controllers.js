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
		},
		deleteCharacter: function () {
			var really = confirm("Really delete this character?");
			if (!really) {
				return;
			}
			var m = this.get('model');
			m.deleteRecord();
			m.save();
			this.target.transitionTo('characters');
		}
	}
})