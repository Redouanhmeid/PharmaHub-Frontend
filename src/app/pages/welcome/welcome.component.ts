import { Component, OnInit } from '@angular/core';
import { single } from './data';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  single: any[];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor: string = '#232837';

  constructor() { Object.assign(this, { single });}

  ngOnInit() {
  }

  onSelect(event: any) {
    console.log(event);
  }
 
}
