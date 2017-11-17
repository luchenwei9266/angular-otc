import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SellListComponent } from './sell-list/sell-list.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const appRoutes: Routes = [
  { path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'sellList', component: SellListComponent },
  { path: 'exchange', component: ExchangeComponent },
  { path: 'user' , component: UserInfoComponent},
  { path: 'login' , component: UserLoginComponent},
  { path: 'register' , component: UserRegisterComponent},
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