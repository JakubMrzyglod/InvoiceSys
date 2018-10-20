import DS from 'ember-data';

export default DS.Model.extend({
            number: DS.attr(),
            date: DS.attr(),
            net: DS.attr(),
            gross: DS.attr(),
            vat: DS.attr(),
            contractor: DS.belongsTo('contractor'),
            positions: DS.hasMany('position')
});
