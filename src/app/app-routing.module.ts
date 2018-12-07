import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VerticalTabsComponent} from './vertical-tabs/vertical-tabs.component';
import {MyOrdersPageComponent} from './my-orders-page/my-orders-page.component';
import {AllUserOrdersComponent} from './all-user-orders/all-user-orders.component';
import {FooterComponent} from './footer/footer.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {AdminOrdersListComponent} from './admin-orders-list/admin-orders-list.component';
import {AdminOrdersPageComponent} from './admin-orders-page/admin-orders-page.component';
import {OrderDetailPageComponent} from './order-detail-page/order-detail-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MyOrdersPageComponent},
  {path: 'detail/:id', component: OrderDetailPageComponent},
  {path: 'my-orders', component: AllUserOrdersComponent},
  {path: 'all-my-orders', component: AdminOrdersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
