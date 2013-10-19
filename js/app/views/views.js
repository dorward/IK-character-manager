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
