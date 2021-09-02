import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pharmacien } from '../classes/pharmacien';
import { AuthService } from '../services/auth.service';
import { PharmacienService } from '../services/pharmacien.service';

@Component({
  selector: 'app-pharmacien-list',
  templateUrl: './pharmacien-list.component.html',
  styleUrls: ['./pharmacien-list.component.css']
})
export class PharmacienListComponent implements OnInit {
 
  pharmaciens: Pharmacien[] = [];
  nom: string;
  constructor(private pharmacienService: PharmacienService,
    public authService : AuthService,
    private router: Router,
    private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
    this.getPharmaciens();  
  }

  private getPharmaciens(){
    this.pharmacienService.getPharmaciensList().subscribe(data => {
      this.pharmaciens = data;
      
    })
    
  }

  pharmacienDetails(id: number){
    this.router.navigate(['pharmacien-details', id]);
  }

  updatePharmacien(id: number){
    this.router.navigate(['update-pharmacien', id]);
  }

  deletePharmacien(id: number){
    this.pharmacienService.deletePharmacien(id).subscribe( data => {
      this.getPharmaciens();
    })
  }
  search(): void {
    if(this.nom != ""){
      this.pharmaciens = this.pharmaciens.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      });
    }else  if(this.nom == ""){
      this.ngOnInit();
    }
  }
  cancel(): void {
    this.nzMessageService.info('c\'est annulé');
  }

  confirm(id: number): void {
    this.pharmacienService.deletePharmacien(id).subscribe( data => {
      this.getPharmaciens();
    })
  }

}
