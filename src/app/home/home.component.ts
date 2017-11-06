import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cryptocurrencyList = [];
  cryptocurrencySelectOption;

  fiatSelectList = [];
  fiatSelectOption;
  constructor() { }

  ngOnInit() {
    this.fiatSelectList = [
      { value: 'cny', label: '人民币' },
      { value: 'hkd', label: '港币' },
    ];
    this.fiatSelectOption = this.fiatSelectList[0];

    this.cryptocurrencyList = [
      { value: 'btc', label: 'BTC' },
      { value: 'eth', label: 'ETH' },
    ];
    this.cryptocurrencySelectOption = this.cryptocurrencyList[ 0 ];
  }

}
