import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmacie } from '../pharmacie';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-update-pharmacie',
  templateUrl: './update-pharmacie.component.html',
  styleUrls: ['./update-pharmacie.component.css']
})
export class UpdatePharmacieComponent implements OnInit {
  
  pharmacie: Pharmacie = new Pharmacie();
  ice: number;
  constructor(private pharmacieService: PharmacieService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.pharmacie = new Pharmacie();
    this.ice = this.route.snapshot.params['ice'];

    this.pharmacieService.getPharmacieByICE(this.ice)
    .subscribe(data => {
      console.log(data);
      this.pharmacie = data;
    }, error => console.log(error));
  }

  updatePharmacie(){
    this.pharmacieService.updatePharmacie(this.ice, this.pharmacie)
    .subscribe( data =>{
      console.log(data);
      this.pharmacie = new Pharmacie();
        this.gotoList();
    }, error => console.log(error));
  }
  gotoList() {
    throw new Error('Method not implemented.');
  }

  submitForm(){

    this.pharmacieService.updatePharmacie(this.ice, this.pharmacie).subscribe( data =>{
      this.goToPharmacieList();
      
    }, error => console.log(error));
  }
  goToPharmacieList(){
    this.router.navigate(['/pharmacies']);
  }
  onBack(): void {
    this.router.navigate(['pharmacies']);
  }

}
