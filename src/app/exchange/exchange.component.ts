import { Component, OnInit } from '@angular/core';
import  { HDNode, Transaction,ECPair } from 'bitcoinjs-lib';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  private testAddr;
  constructor(
  ) {
    // this.keyPair = ECPair.makeRandom();
    console.log(ECPair.makeRandom().getAddress())
  }

  ngOnInit() {
    
  }

}
