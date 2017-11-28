import { Component, OnInit } from '@angular/core';
import  { HDNode, Transaction,ECPair,TransactionBuilder } from 'bitcoinjs-lib';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  public exchangeNum:number;
  public inputText:string;

  constructor(
  ) {

  }

  ngOnInit() {
    
  }

}
