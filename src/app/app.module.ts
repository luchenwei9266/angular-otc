import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HDNode, Transaction } from 'bitcoinjs-lib';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SellListComponent } from './sell-list/sell-list.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserWalletComponent } from './user-wallet/user-wallet.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { BuyListComponent } from './buy-list/buy-list.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    SellListComponent,
    ExchangeComponent,
    UserInfoComponent,
    UserWalletComponent,
    UserOrderComponent,
    UserHistoryComponent,
    BuyListComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AboutComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }