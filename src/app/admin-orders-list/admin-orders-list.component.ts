import {Component, Directive, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';

@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.css'],
  providers: [OrdersService]
})

export class AdminOrdersListComponent implements OnInit {
  @ViewChild('dynamicButton') dynamicButton: TemplateRef<any>;
  public _ordersList: Order[];

  public _columnsPlus: any[] = [
    {id: 'id', name: 'Id'},
    {id: 'name', name: 'Name'},
    {id: 'status', name: 'Status'},
    {id: 'createdWhen', name: 'Created When'},
    {id: 'comments', name: 'Comments'},
    {id: 'templ', name: 'button'}
  ];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {
    this.ordersService.getAllUserOrders().subscribe(orders => this._ordersList = orders);
    //console.log('button', this._columnsPlus);
    //console.log(this._ordersList);

    // this._ordersList = this._ordersList.map(
    //   (order: Order): Order => {
    //     order['templ'] = 'TEXT';
    //     return order;
    //   }
    // );

    // this._ordersList.forEach((item)=>{item['templ']='data-button';});
  }

}
