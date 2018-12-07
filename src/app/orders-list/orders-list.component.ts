import {Component, Injectable, Input, OnInit} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [OrdersService]
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[];
  @Input() inputColumn: { id: number; name: string; status: string; createdWhen: string; comments: string; }[];
  @Input() dynamicColumn: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
