import Route from '@ember/routing/route';

export default Route.extend({
  // async model(params){
  //   let result;
  //   let model = await this.store.findRecord('invoice', params.id)
  //   .then(invoice =>{
  //     invoice.save()  
  //     result = jQuery.extend(true, {}, invoice);
  //     result.items = [];
  //     result.id = invoice.id;
  //     invoice.items.map(item => result.items.push({name:item.name, quantity:item.quantity}))
  //   });
  //     return result;
  // },
  model(params) {
    return this.store.findRecord('invoice', params.id, { include: 'items' });
  }
});
