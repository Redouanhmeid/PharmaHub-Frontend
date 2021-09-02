import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pharmacien } from '../classes/pharmacien';
import { PharmacienService } from '../services/pharmacien.service';

@Component({
  selector: 'app-update-pharmacien',
  templateUrl: './update-pharmacien.component.html',
  styleUrls: ['./update-pharmacien.component.css']
})
export class UpdatePharmacienComponent implements OnInit {
  pharmacien: Pharmacien = new Pharmacien();
  validateForm!: FormGroup;
  id: number;
  constructor(private pharmacienService: PharmacienService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router) { }

  
    submitForm(): void {
      for (const i in this.validateForm.controls) {
        if (this.validateForm.controls.hasOwnProperty(i)) {
          this.validateForm.controls[i].markAsDirty();
          this.validateForm.controls[i].updateValueAndValidity();
        }
      }
      this.savePharmacien();
    }
  updateConfirmValidator(): void {
      /** wait for refresh value */
      Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }
  
  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+212'],
      phoneNumber: [null, [Validators.required]],
      agree: [false]
    });
    this.pharmacien = new Pharmacien();
    this.id = this.route.snapshot.params['id'];

    this.pharmacienService.getPharmacienByID(this.id)
    .subscribe(data => {
      console.log(data);
      this.pharmacien = data;
    }, error => console.log(error));
  }
  
  updatePharmacien(){
    this.pharmacienService.updatePharmacien(this.id, this.pharmacien)
    .subscribe( data =>{
      console.log(data);
      this.pharmacien = new Pharmacien();
        this.gotoList();
    }, error => console.log(error));
  }
  gotoList() {
    throw new Error('Method not implemented.');
  }

  savePharmacien(){
    this.pharmacienService.createPharmacien(this.pharmacien).subscribe( data =>{
      console.log(data);
      this.goToPharmacienList();
    },
    error => console.log(error));
  }
  goToPharmacienList(){
    this.router.navigate(['/pharmaciens']);
  }

  onBack(){
    this.router.navigate(['/pharmaciens']);
  }
}
