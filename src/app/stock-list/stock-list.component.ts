import { Stock } from '../classes/stock';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../services/stock.service';


interface ID {
  code: number;
  ice: number;
}

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  
  listOfID: ID[] = [];
  stock: Stock[] = [];
  listOfID2: any;
  
  
  constructor(private stockService: StockService,
    private router: Router) { }

  ngOnInit(): void {
    this.getStock();
    
  }

  private getStock(){
    this.stockService.getStockList().subscribe(data => {
      this.stock = data;

      console.log(this.stock[0]['id']);
      for (let i = 0; i < 2; ++i) {
        this.listOfID2 = this.stock[0]['id'];
      }     
      console.log(this.listOfID2);  
      console.log(this.stock[0]['quantity']); 
    });

  }
}
