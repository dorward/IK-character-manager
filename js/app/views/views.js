// IK.InputView = Ember.TextField.extend({
// });

// Ember.Handlebars.helper('input', IK.InputView);

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

