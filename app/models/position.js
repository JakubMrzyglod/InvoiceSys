import DS from 'ember-data';

export default DS.Model.extend({
    // item: DS.belongsTo('item'),
    quantity: DS.attr(),
    netsummary: DS.attr(),
    taxsummary: DS.attr(),
    grosssummary: DS.attr(),
    invoice: DS.belongsTo('invoice')
});
