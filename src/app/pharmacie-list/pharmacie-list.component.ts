import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pharmacie } from '../pharmacie';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-pharmacie-list',
  templateUrl: './pharmacie-list.component.html',
  styleUrls: ['./pharmacie-list.component.css']
})
export class PharmacieListComponent implements OnInit {
  pharmacies: Pharmacie[] = [];
  libelle: string;
  constructor(private pharmacieService: PharmacieService,
    private router: Router,
    private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.getPharmacies();
  }

  private getPharmacies(){
    this.pharmacieService.getPharmaciesList().subscribe(data => {
      this.pharmacies = data;
    })
  }

  pharmacieDetails(ice: number){
    this.router.navigate(['pharmacie-details', ice]);
  }

  updatePharmacie(ice: number){
    this.router.navigate(['update-pharmacie', ice]);
  }

  deletePharmacie(ice: number){
    this.pharmacieService.deletePharmacie(ice).subscribe( data => {
      this.getPharmacies();
    })
  }
  search(): void {
    if(this.libelle != ""){
      this.pharmacies = this.pharmacies.filter(res => {
        return res.libelle.toLocaleLowerCase().match(this.libelle.toLocaleLowerCase());
      });
    }else  if(this.libelle == ""){
      this.ngOnInit();
    }
  }
  cancel(): void {
    this.nzMessageService.info('c\'est annulé');
  }

  confirm(ice: number): void {
    this.pharmacieService.deletePharmacie(ice).subscribe( data => {
      this.getPharmacies();
    })
  }
}
