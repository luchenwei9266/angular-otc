import { Component, OnInit } from '@angular/core';
import { HDNode, Transaction } from 'bitcoinjs-lib';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent implements OnInit {
  private testAddr;
  constructor(
    private hdnode: HDNode
  ) {
    // this.keyPair = ECPair.makeRandom();
    console.log(this.hdnode)
  }

  ngOnInit() {
    
  }

}
