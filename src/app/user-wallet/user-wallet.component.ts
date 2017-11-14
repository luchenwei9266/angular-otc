import { Component, OnInit } from '@angular/core';
import AV from '../key';

@Component({
  selector: 'app-user-wallet',
  templateUrl: './user-wallet.component.html',
  styleUrls: ['./user-wallet.component.css']
})
export class UserWalletComponent implements OnInit {
  public userWallets:Array<object>;
  
  constructor() { 
    this.userWallets = [
      { 'name':'比特币(bitcoin)','address':'1DQe9F3agsDcr4qoTZ3Sush4e88Nv9tNxa','amout':'5 BTC','allPrice':'200,000 CNY' },
      { 'name':'以太坊(Ethereum)','address':'0xfc0948f2f1b19cc2f78468864cc737d4d21856d9','amout':'50 ETH','allPrice':'110,000 CNY' },
      { 'name':'小蚁(NEO)','address':'AUmrvwEs6qzy55pgqgcaSkKQgY4JeFm6jv','amout':'1000 NEO','allPrice':'180,000 CNY' }
    ]
  }

  ngOnInit() {
 
  }

}
