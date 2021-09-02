import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Pharmacien } from '../classes/pharmacien';
import { PharmacienService } from '../services/pharmacien.service';

@Component({
  selector: 'app-create-pharmacien',
  templateUrl: './create-pharmacien.component.html',
  styleUrls: ['./create-pharmacien.component.css']
})
export class CreatePharmacienComponent implements OnInit {
  pharmacien: Pharmacien = new Pharmacien();
  validateForm!: FormGroup;
  captchaTooltipIcon: NzFormTooltipIcon = {
    type: 'info-circle',
    theme: 'twotone'
  };

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

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }
  constructor(private fb: FormBuilder,
    private pharmacienService: PharmacienService,
    private router: Router) { }

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
}
