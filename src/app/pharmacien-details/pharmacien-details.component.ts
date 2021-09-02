import { Pharmacien } from './../classes/pharmacien';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PharmacienService } from '../services/pharmacien.service';

@Component({
  selector: 'app-pharmacien-details',
  templateUrl: './pharmacien-details.component.html',
  styleUrls: ['./pharmacien-details.component.css']
})
export class PharmacienDetailsComponent implements OnInit {
  id: number
  pharmacien: Pharmacien
  constructor(private route: ActivatedRoute, private pharmacienService: PharmacienService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.pharmacien = new Pharmacien();
    this.pharmacienService.getPharmacienByID(this.id).subscribe( data => {
      this.pharmacien = data;
    });
  }
  onBack(): void {
    this.router.navigate(['pharmaciens']);
  }
}
