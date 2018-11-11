import Route from '@ember/routing/route';
import { alias }  from '@ember/object/computed';
import Changeset from 'ember-changeset';
import {cloneDeep} from 'lodash'

export default Route.extend({
  async model(params){
    let result;
    let model = await this.store.findRecord('invoice', params.id)
    .then(invoice =>{
      invoice.save()  
      result = jQuery.extend(true, {}, invoice);
      result.items = [];
      result.id = invoice.id;
      invoice.items.map(item => result.items.push({name:item.name, quantity:item.quantity}))
    });
      return result;
  },
  actions:{
    submit(model){
      const {id, name, items}  = model;
      this.store.findRecord('invoice',id)
      .then(function(invoice){
        invoice.set('name',name)
        invoice.set('items',items)
        invoice.save();
      })
      // let invoice = this.store.findRecord('invoice', model.id)
      // .then(function(invoice){
      //   invoice.set('name',model.name);
      //   invoice.get('name').save()
      //   invoice.save()
      // })
      return this.transitionTo('revenue');
    },    
    rollback(){
      return this.transitionTo('revenue');
    }
  }
});
