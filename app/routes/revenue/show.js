import Route from '@ember/routing/route';
import { alias }  from '@ember/object/computed';
import Changeset from 'ember-changeset';
import {cloneDeep} from 'lodash'

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
  async model(params) {
    let model = await this.store.findRecord('invoice', params.id, {include:'items'});
    let items = await model.get('items')
    let result = new Changeset(model)
    result.set('items',items.map(item => new Changeset(item)))
    return result;
  },

  actions:{
    addItem(model){
      model.items.createRecord('item',{name:'a', quantity:50})
    },
    submit(model){
      // model.get('items').forEach(item => item.save())
      // model.save()
      return this.transitionTo('revenue');
    },    
    rollback(model){
      return this.transitionTo('revenue');
    }
  }
});
