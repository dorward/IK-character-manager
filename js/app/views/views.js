var has_word_characters = /\w/;

IK.LinkToSheet = Ember.View.extend({
	templateName: "link-to-sheet",
	tagName: "li",
	display_name: function () {
        var n = this.get('character.name');
        return has_word_characters.test("" + n) ? n : "Unnamed character";
    }.property('character.name'),
});

IK.EditView = Ember.View.extend({
	templateName: "edit",
	tagName: "div",
	classNames: ["form-control"]
});

IK.UnderTitleView = Ember.View.extend({
	templateName: "undertitle",
	tagName: "div",
	classNames: ["undertitle"]
});

IK.CharacterView = Ember.View.extend({
	level: function () {
		var xp = parseInt(this.controller.get('xp'), 10);
		if (isNaN(xp)) {
			return "";
		}
		if (xp < 50) {
			return "Hero";
		}
		if (xp < 100) {
			return "Veteren";
		}
		return "Epic";
	}.property("xp")
});

IK.StatTrioView = Ember.View.extend({
	classNames: ['stat-trio'],
	templateName: "stattrio",
	pairs: function () {
		var arr = this.get('values').split(',');
		var c = this.get('character');
		for (var i = 0; i < arr.length; i++) {
			arr[i] = { key: arr[i], value: c.get(arr[i].toLowerCase()) };
		}
		return arr;
	}.property('values', 'character.model')
});