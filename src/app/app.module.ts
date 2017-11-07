import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { SellListComponent } from './sell-list/sell-list.component';
import { ExchangeComponent } from './exchange/exchange.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    SellListComponent,
    ExchangeComponent
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