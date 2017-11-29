import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell-list',
  templateUrl: './sell-list.component.html',
  styleUrls: ['./sell-list.component.css']
})
export class SellListComponent implements OnInit {
    //  模拟数据
   data = [
    {
      uid         :  1,
      name       : '钢铁侠',
      amout       :  '0~6 个 BTC',
      score        : 4.5,
      expand     : false,
      range    : '2000~6000 CNY',
      online : '在线中',
      introduction: '支持支付宝，微信，银行转账，交易前请联系，谢谢！'
    },
    {
      uid         :  2,
      name       : '雷神',
      amout       :  '25~50 个 BTC',
      score        : 3.2,
      expand     : false,
      range    : '2000~60000 CNY',
      online : '不在线',
      introduction: '支持支付宝，微信，银行转账，交易前请联系，谢谢！'
    },
    {
      uid         :  3,
      name       : '神奇女侠',
      amout       :  '500 个以上 BTC',
      score        : 4.9,
      expand     : false,
      range    : '5000~50000 CNY',
      online: '在线中',
      introduction: '支持支付宝，微信，银行转账，交易前请联系，谢谢！'
    },
    {
      uid         :  4,
      name       : '绿巨人',
      amout       :  '1000 个以上 NEO',
      score        : 4.9,
      expand     : false,
      range    : '5000~50000 CNY',
      online: '在线中',
      introduction: '支持支付宝，微信，银行转账，交易前请联系，谢谢！'
    },
  ];

  constructor(  
    private router: Router
  ) { }

  ngOnInit() {
  }

  startExchange(data) {
    this.router.navigateByUrl("/exchange");
  }

}
