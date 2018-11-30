import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';
import {Tab} from "../tab";

@Component({
  selector: 'app-all-user-orders',
  templateUrl: './all-user-orders.component.html',
  styleUrls: ['./all-user-orders.component.css'],
  providers: [OrdersService]
})
export class AllUserOrdersComponent implements OnInit {
  mass: Order[];

  constructor(private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.mass = this.ordersService.getAllUserOrders();
  }

}
