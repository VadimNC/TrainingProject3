import {Component, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';
import {Tab} from '../tab';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [OrdersService]
})
export class OrdersListComponent implements OnInit {
  orders: Order[];

  // tab: Tab;

  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.getOrders();
    // this.mass = this.ordersService.getAllUserOrders();
    // this.ordersService.getAllUserOrders().subscribe(orders => this.orders = orders);
  }

  getOrders(): void {
    this.ordersService.getAllUserOrders().subscribe(orders => this.orders = orders);
  }

}
