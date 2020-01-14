import { Component, OnInit } from '@angular/core';
import { StocksService } from './../../services/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  symbols: string[];
  stock: string;

  constructor(private stockService: StocksService) {
    this.symbols = stockService.get();
  }

  add() {
    this.symbols = this.stockService.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol) {
    this.symbols = this.stockService.remove(symbol);
  }

  ngOnInit() {
  }

}
