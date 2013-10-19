/*globals IronKingdoms, Ember*/

// TODO: Add Ember-Data
IK.Character = DS.Model.extend({
    name: DS.attr('string'),
    player: DS.attr('string'),
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
		player: "David",
		race: "Human",
		xp: 7,
		archetype: "Skilled",
        characteristics: "Silver Shield badge tatooed over heart",
        sex: "Male",
        faith: "Morrow",
        weight: "",
        height: "",
        careers: "Thief - Spy"
	},
	{
		id: 2,
		name: "Cobb Scarrow",
		player: "David",
		race: "Human",
		xp: 4,
		archetype: "Skilled",
        characteristics: "",
        sex: "Male",
        faith: "Morrow",
        weight: "",
        height: "",
        careers: "Bounty Hunter - Pistoleer"
	}
];
