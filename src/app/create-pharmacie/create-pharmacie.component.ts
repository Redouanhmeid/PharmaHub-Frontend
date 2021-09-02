import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pharmacie } from '../classes/pharmacie';
import { PharmacieService } from '../services/pharmacie.service';

@Component({
  selector: 'app-create-pharmacie',
  templateUrl: './create-pharmacie.component.html',
  styleUrls: ['./create-pharmacie.component.css']
})
export class CreatePharmacieComponent implements OnInit {
  pharmacie: Pharmacie = new Pharmacie();
  constructor(private pharmacieService: PharmacieService,
    private router: Router) { }

  ngOnInit(): void {
  }
  savePharmacie(){
    this.pharmacieService.createPharmacie(this.pharmacie).subscribe( data =>{
      console.log(data);
      this.goToPharmacieList();
    },
    error => console.log(error));
  }
  goToPharmacieList(){
    this.router.navigate(['/pharmacies']);
  }

  submitForm(){
    this.savePharmacie();
  }
  onBack(): void {
    this.router.navigate(['pharmacies']);
  }
}
