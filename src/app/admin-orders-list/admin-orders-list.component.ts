import {
  Component, ComponentFactoryResolver, ContentChild, Directive, ElementRef, forwardRef, Input, OnInit, Output,
  TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';
import {OrdersService} from '../orders.service';
import {Order} from '../order';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-admin-orders-list',
  templateUrl: './admin-orders-list.component.html',
  styleUrls: ['./admin-orders-list.component.css'],
  providers: [OrdersService]
})


export class AdminOrdersListComponent implements OnInit {
  @ViewChild('dynamicButton') dynamicButton: TemplateRef<any>;
  @ViewChild('dynamicButton2') dynamicButton2: TemplateRef<any>;
  // @ContentChild(forwardRef(() => AdminOrdersListComponent)) dynamicButton;
  // @ContentChild(forwardRef(() => AdminOrdersListComponent)) dynamicButton2;
  // @ViewChild('mydiv', {read: ElementRef}) tref: ElementRef;
  public _ordersList: Order[];
  public usersList: User[];
  public user: User;
  // public columnTemplate = [
  //   {named: 'button', templ: '#dynamicButton'},
  //   {named: 'button2', templ: '#dynamicButton2'}];
  // @Input ccc = 'button';
  public _columnTemplate: any[];
  public _columnsPlus: any[] = [
    {id: 'button2', name: 'button2'},
    {id: 'id', name: 'Id'},
    {id: 'name', name: 'Name'},
    {id: 'status', name: 'Status'},
    {id: 'createdWhen', name: 'Created When'},
    {id: 'comments', name: 'Comments'},
    {id: 'button', name: 'button'}
  ];

  // public viewTemplate() {
  //   this._columnTemplate.forEach(function (xxx) {
  //      console.log('vvvvv = ' + xxx.template);
  //   });
  // }

  // @Input() myStr: string;
  // public _ccooll: string[];
  // _ccooll = [{id: 'button2', name: 'button2'},
  //   {id: 'id', name: 'Id'}];

  constructor(private ordersService: OrdersService,
              private usersService: UsersService,
              private route: ActivatedRoute,
              private resolver: ComponentFactoryResolver) {
    // this.ordersService.getColPlus();
  }

  ngOnInit(): void {
    this._columnTemplate = [
      {name: 'button', template: this.dynamicButton},
      {name: 'button2', template: this.dynamicButton2}
    ];

    // this.ordersService.getColPlus();

    // this._columnsPlus = [
    //   {id: 'button2', name: 'button2'},
    //   {id: 'id', name: 'Id'},
    //   {id: 'name', name: 'Name'},
    //   {id: 'status', name: 'Status'},
    //   {id: 'createdWhen', name: 'Created When'},
    //   {id: 'comments', name: 'Comments'},
    //   {id: 'button', name: 'button'}
    // ];

    // this.myStr = this._columnsPlus[0].name;
    // this._columnsPlus = [
    //   {id: 'button2', name: 'button2'},
    //   {id: 'id', name: 'Id'},
    //   {id: 'name', name: 'Name'},
    //   {id: 'status', name: 'Status'},
    //   {id: 'createdWhen', name: 'Created When'},
    //   {id: 'comments', name: 'Comments'},
    //   {id: 'button', name: 'button'}
    // ]


    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUser(id).subscribe(user => this.user = user);
    this.ordersService.getAllUserOrders().subscribe(orders => this._ordersList = orders);
    this.usersService.getAllUsers().subscribe(users => this.usersList = users);
    //this.usersService.getAllUsers().subscribe(users => this.usersList = users);

    // console.log(this.tref.nativeElement.textContent);

    //console.log('button', this.columnTemplate);
    // console.log('_columnsPlus = ' + this._columnsPlus);
    // console.log('_columnTemplate = ' + this._columnTemplate);
    // this._ordersList.forEach((item)=>{item['templ']='data-button';});
    // console.log('myStr = ' + this.myStr);
    // this._ordersList = this._ordersList.map(
    //   (order: Order): Order => {
    //     order['templ'] = 'TEXT';
    //     return order;
    //   }
    // );

    // console.log('template', this._columnTemplate);
    // this._ordersList.forEach((item)=>{item['templ']='data-button';});
  }

  _orderUpdate(user: User): void {
    console.log(user);
    this._ordersList[0].assigned = "test";
    console.log(this._ordersList);
  }

}


export interface SimpleMap<T> {
  [key: string]: T;
}
