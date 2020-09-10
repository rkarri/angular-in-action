import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from '../services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: StockInterface[];
  symbols: string[];

  constructor(private stockSvc: StocksService) {
    this.symbols = this.stockSvc.get();
   }

  ngOnInit() {
    this.stockSvc.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}