export default function() {

  this.namespace = '/api';

  let invoices = {
    data:[
      {
    type: 'invoice',
    id: '0001-2018',
    attributes:{
        number: '0001-2018',
        date: '28.12.2018',
        net: 1000,
        gross: 1230,
        vat: 230,
        items:[{
          name:'Product 1',
          description:'',
          unit:'psc',
          net:25,
          tax:23,
          quantity:4,
          totalnet:100,
          totaltax:23,
          totalgross:123
        },{
          name:'Product 1',
          description:'',
          unit:'psc',
          net:25,
          tax:23,
          quantity:4,
          totalnet:100,
          totaltax:23,
          totalgross:123
        }]
      },
      relationships:{
        contractor:{
          data:{
          type:'contractor',
          id:'01'}
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
        contractor:{
          taxnum: '547898989',
          name: 'Company awesome name',
          city: 'London',
          zipcode: '43-300',
          address: 'King st. 133',  
        },
        items:[{
          name:'Product 2',
          description:'',
          unit:'psc',
          net:20,
          tax:23,
          quantity:5,
          totalnet:100,
          totaltax:23,
          totalgross:123
        }]
    }
}],
included:[{
  type:'contractor',
  id:'01',
  attributes:{
    taxnum: '000001235',
    name: 'Company nice name',
    city: 'Boston',
    zipcode: '90310',
    address: 'Sweet st. 982',  
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
