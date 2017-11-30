import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { routeAnimation } from './app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimation]
})
export class AppComponent {
  title="app";
  // router跳转动画所需参数
  routerState:boolean = true;
  routerStateCode:string = 'active';
  constructor(private router:Router){
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
        // 每次路由跳转改变状态
        this.routerState = !this.routerState;
        this.routerStateCode = this.routerState ? 'active' : 'inactive';
        }
      });
  }
}
