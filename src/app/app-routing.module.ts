import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [];

// const routes: Routes = [
//   { path: '', redirectTo: '/', pathMatch: 'full' },
//   { path: '', component: TabsPanelComponent },
//   { path: 'my-orders', component: MainPageComponent },
//   { path: 'second', component: MainPageComponent },
//   { path: 'third', component: MainPageComponent },
//   { path: 'fourth', component: MainPageComponent },
//   { path: 'fifth', component: MainPageComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
