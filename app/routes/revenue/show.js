import Route from '@ember/routing/route';
import Changeset from 'ember-changeset';

export default Route.extend({
  async model(params){
      let model = await this.store.findRecord('invoice', params.id);
      this.changeset = new Changeset(model);
      return this.changeset;
  },
  actions:{
    submit(changeset){
      this.transitionTo('revenue');
      return changeset.save()
    },    
    rollback(changeset){
      this.transitionTo('revenue');
      return changeset.rollback()
    }
  }
});
