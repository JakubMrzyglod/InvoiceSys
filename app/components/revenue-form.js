import Component from '@ember/component';
import Changeset from "ember-changeset";
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  router: service(),

  didReceiveAttrs() {
    this._super(...arguments);

    let model = this.get('model');
    this.set('changeset', new Changeset(model));
    this.set("changeset.invoiceItems", this.model.get("items").toArray());
  },

  actions: {
    addItem() {
      let newItem = this.store.createRecord("item", { name: "a", quantity: 50, invoice: this.model });
      let items = this.changeset.get('invoiceItems');
      items.push(newItem);
      this.set("changeset.invoiceItems", items);
    },

    submit() {
      this.changeset.get('invoiceItems').forEach(item => item.save()); // TODO separate endpoint for invoiceItem post
      this.changeset.save();
      this.router.transitionTo('revenue');
    },
    
    rollback() {
      this.changeset.rollback();
      this.store.peekAll('item').forEach(item => {
        if ( item.isNew ) {
          item.destroy();
        }
      });
      this.router.transitionTo('revenue');
    }
  }
});
