export default function() {

  this.namespace = '/api';

  let invoices = {
    data:[{
    type: 'invoice',
    id: '0001-2018',
    attributes:{
        number: '0001-2018',
        date: '28.12.2018',
        net: 1000,
        gross: 1230,
        vat: 230,
      },
      relationships:{
        contractor:{
          data:{
          id: '002',
          type: 'contractor'}
        }
      }
    },{
    type: 'invoice',
    id: '0002-2018',
    attributes:{
        number: '0002/2018',
        date: '28.12.2018',
        net: 1000,
        gross: 1230,
        vat: 230,
    },
    relationships:{
      contractor:{
        data:{
        id: '001',
        type: 'contractor'}
      }
    }
  }],
  included:[{
    id: '001',
    type: 'contractor',
    attributes:{
      taxnum: '000001235',
      name: 'Company nice name',
      city: 'Boston',
      zipcode: '90310',
      address: 'Sweet st. 982',  
    } 
  },{
    id: '002',
    type: 'contractor',
    attributes:{
      taxnum: '547898989',
      name: 'Company awesome name',
      city: 'London',
      zipcode: '43-300',
      address: 'King st. 133',  
    } 
  }]
}
  this.get('/invoices', function() {
    return invoices;
  });

  this.get('/invoices/:id', function (db, request) {
    return { data: invoices.data.find((invoice) => request.params.id === invoice.id), 
      included: invoices.included};
  });


}
