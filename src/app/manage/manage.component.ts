import { Component, OnInit } from '@angular/core';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
 symbols: string[];
 stock: string;

  constructor(private stockSvc: StocksService) { 
    this.symbols = stockSvc.get();
  }

  add() {
     this.symbols = this.stockSvc.add(this.stock.toUpperCase());
  }

 remove(symbol) {
  this.symbols = this.stockSvc.remove(symbol);
 }

}