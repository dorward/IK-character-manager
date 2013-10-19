/*globals IronKingdoms, Ember*/

// TODO: Add Ember-Data
IK.Character = DS.Model.extend({
    name: DS.attr('string'),
    race: DS.attr('string'),
    xp: DS.attr('number')
});

IK.Character.FIXTURES = [
	{
		id: 1,
		name: "Silus Murdoch",
		race: "Human",
		xp: 7
	},
	{
		id: 2,
		name: "Cobb Scarrow",
		race: "Human",
		xp: 4
	}
];
