/*globals IronKingdoms, Ember*/

IK.Character = DS.Model.extend({
    name: DS.attr('string', {
        // Default value provided for the benefit of the `display_name` observer
        defaultValue: ""
    }),
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