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

// Why {{input}} doesn't support property binding for type I've no idea. IE I suspect.
IK.EditNumberView = IK.EditView.extend({
	templateName: "edit-number"
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

IK.LifeSpiralView = Ember.View.extend({
	templateName: "life-spiral"
});

IK.LifeSpiralArmView = Ember.View.extend({
	tagName: 'svg',
	width: 200,
	height: 200,
	viewBox: "0 0 200 200",
	version: '1.1',
	xmlns: "http://www.w3.org/2000/svg",
	attributeBindings: ['xmlns', 'width', 'height', 'viewBox', 'version'],
	classNames: ['spiral-arm'],
	didInsertElement: function () {
		// Render the SVG
		var max = this.get('stat');
		var element = this.$();
		console.log(max, element);
		for (var i = 0; i < max; i++) {
			element.append(this.createDot(i));
		}
	},
	createDot: function (index) {
		var dot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
		dot.setAttribute('cx', 15 + 20 * index);
		dot.setAttribute('cy', 10);
		dot.setAttribute('r', 7);
		return dot;
	},
});