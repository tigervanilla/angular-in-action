import { Component, OnInit } from '@angular/core';
import { StocksService, StockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: StockInterface[];
  symbols: string[];

  constructor(private stockService: StocksService) {
    // The constructor method runs as soon as the component is created.
    this.symbols = stockService.get();
  }

  ngOnInit() {
    // We don't load data in the constructor because constructor fires early in the rendering of a component
    //  This means that often values are not yet ready to be consumed.
    this.stockService.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
