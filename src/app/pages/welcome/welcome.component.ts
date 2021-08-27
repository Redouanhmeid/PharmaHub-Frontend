import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(public msg: NzMessageService) { }

  ngOnInit() {
  }
  Highcharts: typeof Highcharts = Highcharts;

  salesperday: Highcharts.Options = {
    chart: {
      width: 770,
      height: (9 / 16 * 100) + '%' // 16:9 ratio
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Nombre de ventes par jour'
      },
    xAxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7', '8','9','10', '11', '12', '13', '14', '15', '16', '17', '18','19','20', '21', '22', '23', '24', '25', '26', '27', '28','29','30']
      },
    yAxis: {
      title: {
          text: 'Ventes'
      }
    },
    series: [
      {
        type: 'line',
        name: 'Hind',
        data: [11, 22, 33, 24, 34, 36, 47, 58, 45, 51, 61, 52, 33, 24, 34, 36, 47, 58, 45, 51, 41, 52, 33, 64, 34, 36, 47, 58, 45, 51]
      },{
        type: 'line',
        name: 'Amine',
        data: [11, 15, 16, 17, 23, 22, 25, 28, 34, 36, 47, 58, 45, 51, 61, 52, 33, 47, 58, 45, 51, 41, 52, 33, 64, 47, 58, 45, 51, 41]
      },{
        type: 'line',
        name: 'Ali',
        data: [16, 15, 26, 17, 23, 22, 25, 28, 34, 36, 47, 58, 45, 51, 41, 52, 33, 64, 58, 45, 51, 61, 52, 33, 47, 57, 52, 40, 47, 40]
      },{
        type: 'line',
        name: 'Sara',
        data: [15, 15, 26, 17, 23, 36, 47, 58, 45, 51, 61, 52, 58, 45, 51, 41, 52, 33, 36, 47, 58, 45, 51, 61, 45, 51, 41, 52, 63, 70]
      }
    ]
  };

  bestsales: Highcharts.Options = {
    chart:{
      width: 770,
      height: (9 / 16 * 100) + '%' // 16:9 ratio
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Meilleurs produits par vente'
      },
    xAxis: {
      title: {
        text: 'Août'
      }
    },
    yAxis: {
      title: {
          text: 'Ventes'
      }
    },
    series: [
      {
        type: 'column',
        name: 'DOLIPRANE VITAMINE C',
        data: [2921]
      },{
        type: 'column',
        name: 'AUREOMYCINE 3%',
        data: [2416]
      },{
        type: 'column',
        name: 'MICRODIOL',
        data: [1634]
      },{
        type: 'column',
        name: 'MINIDRIL',
        data: [1556]
      },{
        type: 'column',
        name: 'PERNABOL',
        data: [1634]
      },{
        type: 'column',
        name: 'LEVOTHYROX',
        data: [1556]
      }
    ]
  };
  
  data = [
    'Ali Zajli',
    'Hind Hamiouni',
    'Amine Bertal',
    'Sara Ammour',
  ];

}
