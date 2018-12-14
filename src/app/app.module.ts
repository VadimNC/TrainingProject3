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
import {OrderDetailComponent} from './order-detail/order-detail.component';
import {AdminOrdersListComponent} from './admin-orders-list/admin-orders-list.component';
import {AdminOrdersPageComponent} from './admin-orders-page/admin-orders-page.component';
import {OrderDetailPageComponent} from './order-detail-page/order-detail-page.component';
import {VerticalTabsPageComponent} from './vertical-tabs-page/vertical-tabs-page.component';
import {AllUserOrdersPageComponent} from './all-user-orders-page/all-user-orders-page.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './api/in-memory-data.service';
import { FormLoginComponent } from './form-login/form-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VerticalTabsComponent,
    OrdersListComponent,
    AllUserOrdersComponent,
    MyOrdersPageComponent,
    OrderDetailComponent,
    AdminOrdersListComponent,
    AdminOrdersPageComponent,
    OrderDetailPageComponent,
    VerticalTabsPageComponent,
    AllUserOrdersPageComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
    // ,
    // HttpClientModule,
    // // Delete this string when real api wil be ready
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
