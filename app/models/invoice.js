import DS from 'ember-data';

export default DS.Model.extend({
            name: DS.attr(),
            // number: DS.attr(),
            // date: DS.attr(),
            // net: DS.attr(),
            // gross: DS.attr(),
            // vat: DS.attr(),
            // contractor: DS.belongsTo('contractor'),
            items: DS.attr(),
            // items: DS.hasMany('item')
});
