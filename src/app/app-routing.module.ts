import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SellListComponent } from './sell-list/sell-list.component';
import { ExchangeComponent } from './exchange/exchange.component';

const appRoutes: Routes = [
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sellList', component: SellListComponent },
  { path: 'exchange', component: ExchangeComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}