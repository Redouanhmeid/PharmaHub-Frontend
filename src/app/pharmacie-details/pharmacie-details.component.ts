import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmacie } from '../pharmacie';
import { PharmacieService } from '../pharmacie.service';

@Component({
  selector: 'app-pharmacie-details',
  templateUrl: './pharmacie-details.component.html',
  styleUrls: ['./pharmacie-details.component.css']
})
export class PharmacieDetailsComponent implements OnInit {
  ice: number
  pharmacie: Pharmacie
  constructor(private route: ActivatedRoute, private pharmacieService: PharmacieService,
    private router: Router) { }

  ngOnInit(): void {
    this.ice = this.route.snapshot.params['ice'];
    this.pharmacie = new Pharmacie();
    this.pharmacieService.getPharmacieByICE(this.ice).subscribe( data => {
      this.pharmacie = data;
    });
  }
  onBack(): void {
    this.router.navigate(['pharmacies']);
  }
}
