import {Component, Injectable, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
  providers: [OrdersService]
})
export class OrdersListComponent implements OnInit {
  @Input() orders: Order[];
  @Input() inputColumn: { id: number; name: string; status: string; createdWhen: string; comments: string; }[];
  @Input() dynamicColumns: { name: String, template: TemplateRef<any> }[];
  // myStr = 'button';

  // @Input() dynamicColumns2: { name: String, template: TemplateRef<any>}[];
  // @Output bbb = 'button';
  // @Input() columnTemplate2 = [
  //   {name: 'button', templ: '#dynamicButton'},
  //   {name: 'button2', templ: '#dynamicButton2'}];
  // public myStr2: string = 'button';

  constructor(private ordersService: OrdersService,
              private route: ActivatedRoute) {
    // this.ordersService.getColPlus();
  }

  ngOnInit() {
    // this.ordersService.getColPlus();
    // console.log("VYVOD-2=" +this.dynamicColumns[name]);
    //  console.log('inputColumn = ' + this.inputColumn);
    // console.log('dynamicColumns = ' + this.dynamicColumns);
    // this.orders = this.orders.map(
    //   (order: Order): Order => {
    //     order['status'] = 'Open-Gr';
    //     return order;
    //   }
    // );
  }

}
