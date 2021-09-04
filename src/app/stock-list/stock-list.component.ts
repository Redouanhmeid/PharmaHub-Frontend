import { Stock } from './../classes/stock';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../services/stock.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];
 
    
  constructor(private stockService: StockService,
    private HttpClient: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
      this.getStock();
  }
  private getStock(){
    this.stockService.getStockList().subscribe(data => {
      this.stocks = data;
      console.log(this.stocks)
    })
  }
  
}
