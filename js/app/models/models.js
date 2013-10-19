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
    careers: DS.attr('string'),

    "phy": DS.attr('number'),
    "spd": DS.attr('number'),
    "str": DS.attr('number'),
    "agi": DS.attr('number'),
    "prw": DS.attr('number'),
    "poi": DS.attr('number'),
    "int": DS.attr('number'),
    "arc": DS.attr('number'),
    "per": DS.attr('number')
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
        weight: "140lbs",
        height: "6'1\"",
        careers: "Thief - Spy",
        "phy": 1,
        "spd": 2,
        "str": 3,
        "agi": 4,
        "prw": 5,
        "poi": 6,
        "int": 7,
        "arc": 8,
        "per": 9
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
        careers: "Bounty Hunter - Pistoleer",
        "phy": 9,
        "spd": 8,
        "str": 7,
        "agi": 6,
        "prw": 5,
        "poi": 4,
        "int": 3,
        "arc": 2,
        "per": 1
	}
];
