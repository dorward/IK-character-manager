/*globals IronKingdoms, Ember*/

// TODO: Add Ember-Data
IK.Character = DS.Model.extend({
    name: DS.attr('string'),
    xp: DS.attr('integer')
});

IK.Character.FIXTURES = [
	{
		id: 1,
		name: "Silus Murdoch",
		xp: 7
	},
	{
		id: 2,
		name: "Cobb Scarrow",
		xp: 4
	}
];
