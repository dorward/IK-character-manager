/*globals IronKingdoms, Ember*/

// TODO: Add Ember-Data
IK.Character = DS.Model.extend({
    name: DS.attr('string'),
    race: DS.attr('string'),
    xp: DS.attr('number'),
    archetype: DS.attr('string'),
    characteristics: DS.attr('string'),
    sex: DS.attr('string'),
    faith: DS.attr('string'),
    weight: DS.attr('string'),
    height: DS.attr('string'),
    careers: DS.attr('string')
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
