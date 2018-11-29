import {Injectable} from '@angular/core';
import {Order} from './order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private dataOrders: Order[] = [
    {
      id: 1,
      name: 'order1',
      status: 'Open',
      createdWhen: '01/01/2018',
      comments: 'WDRTFGBVHBNNtewrtewrtwertwerwtewrtwertewrtewrt wretwertwertwert ewewqtertwertewrtwet rewtewrrtwert ree wertewrtewrtewrtwertwerwtewrtwertewrtewrt wretwertwertwert ewewqtertwertewrtwet rewtewrrtwert reewertewrtewrtewrtwertwerwtewrtwertewrtewrt wretwertwertwert ewewqtertwertewrtwet rewtewrrtwert reewertewrtewrtewrtwertwerwtewrtwertewrtewrt wretwertwertwert ewewqtertwertewrtwet rewtewrrtwert 123'
    },
    {id: 2, name: 'order2', status: 'Open', createdWhen: '02/01/2018', comments: ''},
    {id: 3, name: 'order3', status: 'Closed', createdWhen: '03/01/2018', comments: ''},
    {id: 4, name: 'order4', status: 'Open', createdWhen: '05/01/2018', comments: ''},
    {id: 5, name: 'order5', status: 'Open', createdWhen: '11/01/2018', comments: ''},
    {id: 6, name: 'order6', status: 'Open', createdWhen: '16/01/2018', comments: ''},
    {id: 7, name: 'order7', status: 'Open', createdWhen: '21/01/2018', comments: ''},
    {id: 8, name: 'order2', status: 'Open', createdWhen: '02/01/2018', comments: ''},
    {id: 9, name: 'order3', status: 'Closed', createdWhen: '03/01/2018', comments: ''},
    {id: 10, name: 'order4', status: 'Open', createdWhen: '05/01/2018', comments: ''},
    {id: 11, name: 'order5', status: 'Open', createdWhen: '11/01/2018', comments: ''},
    {id: 12, name: 'order6', status: 'Open', createdWhen: '16/01/2018', comments: ''},
    {id: 13, name: 'order7', status: 'Open', createdWhen: '21/01/2018', comments: ''},
    {id: 14, name: 'order2', status: 'Open', createdWhen: '02/01/2018', comments: ''},
    {id: 15, name: 'order3', status: 'Closed', createdWhen: '03/01/2018', comments: ''},
    {id: 16, name: 'order4', status: 'Open', createdWhen: '05/01/2018', comments: ''},
    {id: 17, name: 'order5', status: 'Open', createdWhen: '11/01/2018', comments: ''},
    {id: 18, name: 'order6', status: 'Open', createdWhen: '16/01/2018', comments: ''},
    {id: 19, name: 'order7', status: 'Open', createdWhen: '21/01/2018', comments: ''},
    {id: 20, name: 'order2', status: 'Open', createdWhen: '02/01/2018', comments: ''},
    {id: 21, name: 'order3', status: 'Closed', createdWhen: '03/01/2018', comments: ''},
    {id: 22, name: 'order4', status: 'Open', createdWhen: '05/01/2018', comments: ''},
    {id: 23, name: 'order5', status: 'Open', createdWhen: '11/01/2018', comments: ''},
    {id: 24, name: 'order6', status: 'Open', createdWhen: '16/01/2018', comments: ''},
    {id: 25, name: 'order7', status: 'Open', createdWhen: '21/01/2018', comments: ''},
    {id: 26, name: 'order7', status: 'Open', createdWhen: '21/01/2018', comments: ''}
  ]

  getAllUserOrders(): Order[] {
    return this.dataOrders;
  }

}
