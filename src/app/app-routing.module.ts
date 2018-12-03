import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VerticalTabsComponent} from './vertical-tabs/vertical-tabs.component';
import {MyOrdersPageComponent} from './my-orders-page/my-orders-page.component';
import {AllUserOrdersComponent} from './all-user-orders/all-user-orders.component';
import {FooterComponent} from './footer/footer.component';
import {OrderDetailComponent} from './order-detail/order-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: MyOrdersPageComponent},
  {path: 'detail/:id', component: OrderDetailComponent},
  {path: 'my-orders', component: AllUserOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
