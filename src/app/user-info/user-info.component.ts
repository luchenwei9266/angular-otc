import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})

export class UserInfoComponent implements OnInit {
  public contentFlag:string;
  public isCollapsed = false;
  constructor () {

   }

  ngOnInit() {
    this.contentFlag = "userWallet";
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  switchPage(flag:string) {
    this.contentFlag = flag;
  }

}
