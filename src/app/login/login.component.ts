import { User } from './../classes/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Pharmacien } from '../classes/pharmacien';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  visible = false;
  placement: NzDrawerPlacement = 'top';
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  user = new Pharmacien();
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
  }

  constructor(private fb: FormBuilder, private authService : AuthService, private router : Router, private message: NzMessageService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    
  }
  onLoggedInP(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignInP(this.user);
    console.log("valid Pharmacien "+isValidUser);
    if (isValidUser)
    
      this.router.navigate(['/']);     
    
      else
      this.createMessage('error');
  }
  onLoggedInC(){
    console.log(this.user);
    let isValidUser: Boolean = this.authService.SignInC(this.user);
    console.log("valid Client "+isValidUser);
    if (isValidUser)
    
      this.router.navigate(['/produits']);     
    
      else
      this.createMessage('error');
  }
  
  createMessage(type: string): void {
    this.message.create(type, `Login ou mot de passe incorrecte!`);
  }
}
