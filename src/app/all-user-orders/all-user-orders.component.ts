import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-all-user-orders',
  templateUrl: './all-user-orders.component.html',
  styleUrls: ['./all-user-orders.component.css']
})
export class AllUserOrdersComponent implements OnInit {
  private _ordersList: Order[];
  public columnsPlus: any[] = [
    {id: 'id', name: 'Id'},
    {id: 'name', name: 'Name'},
    {id: 'status', name: 'Status'},
    {id: 'createdWhen', name: 'Created When'},
    {id: 'comments', name: 'Comments'}
  ];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.ordersService.getAllUserOrders().subscribe(orders => this._ordersList = orders);
  }

}
