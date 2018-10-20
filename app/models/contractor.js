import DS from 'ember-data';

export default DS.Model.extend({
    taxnum: DS.attr(),
    name: DS.attr(),
    city: DS.attr(),
    zipcode: DS.attr(),
    address: DS.attr(),
    invoices: DS.hasMany('invoice'),
});
