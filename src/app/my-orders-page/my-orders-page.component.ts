import {Component, OnInit} from '@angular/core';
import {Tab} from '../tab';
import {ActivatedRoute} from '@angular/router';
import {AllUserOrdersComponent} from '../all-user-orders/all-user-orders.component';
import {OrdersService} from '../orders.service';
import {Order} from '../order';

@Component({
  selector: 'app-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.css']
})
export class MyOrdersPageComponent implements OnInit {
  public tab: Tab;
  private _ordersList: Order[];

  constructor(private ordersService: OrdersService) {
  }


  ngOnInit() {
    this.ordersService.getAllUserOrders().subscribe(orders => this._ordersList = orders);
  }

}
