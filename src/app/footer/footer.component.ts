import {Component, OnInit} from '@angular/core';
import {Order} from '../order';
import {OrdersService} from '../orders.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // order: Order;
  //
  // constructor(private route: ActivatedRoute,
  //             private ordersService: OrdersService,
  //             private location: Location) {
  // }
  //
  // ngOnInit(): void {
  //   this.getOrder();
  // }
  //
  // getOrder(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.ordersService.getOrder(id).subscribe(order => this.order = order);
  // }
  //
  // goBack(): void {
  //   this.location.back();
  // }
  constructor() { }

  ngOnInit() {
  }

}
