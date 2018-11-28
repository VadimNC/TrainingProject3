import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {VerticalTabsComponent} from './vertical-tabs/vertical-tabs.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {AllUserOrdersComponent} from './all-user-orders/all-user-orders.component';
import {MyOrdersPageComponent} from './my-orders-page/my-orders-page.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VerticalTabsComponent,
    OrdersListComponent,
    AllUserOrdersComponent,
    MyOrdersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
