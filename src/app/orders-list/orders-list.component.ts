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
  mass: Order[];
  tab: Tab;

  constructor(private route: ActivatedRoute,
              private ordersService: OrdersService) {
  }

  ngOnInit() {
    this.mass = this.ordersService.getAllUserOrders();
  }

}
