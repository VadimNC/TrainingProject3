import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VerticalTabsComponent} from './vertical-tabs/vertical-tabs.component';
import {MyOrdersPageComponent} from './my-orders-page/my-orders-page.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: VerticalTabsComponent},
  {path: 'my-orders', component: MyOrdersPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
