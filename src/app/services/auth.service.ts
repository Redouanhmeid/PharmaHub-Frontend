import { User } from './../classes/user';
import { Pharmacien } from './../classes/pharmacien';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from './pharmacien.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pharmaciens: Pharmacien[] = [];
  
  public loggedUser:string;
  public isloggedIn: Boolean = false;
  public role:string;


  getPharmaciens(){
    this.pharmacienService.getPharmaciensList().subscribe(data => {
      this.pharmaciens = data;
    })
    
  }

  constructor(private pharmacienService: PharmacienService,private router: Router) { }
  SignIn(user :Pharmacien):Boolean{
    this.getPharmaciens();
    let validUser: Boolean = false;
    this.pharmaciens.forEach((curUser) => {
      if(user.nom_utilisateur=== curUser.nom_utilisateur && user.password==curUser.password) {
        validUser = true;
        this.loggedUser = curUser.nom_utilisateur;
        this.isloggedIn = true;
        this.role = curUser.role;
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('loggedRoleUser',this.role);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });
     return validUser;
  }

  isPharmacien():Boolean{
    if (!this.role) //this.roles== undefiened
       return false;
    return (this.role.indexOf('pharmacien') >-1);
  }

  logout() { 
    this.isloggedIn= false;
    this.loggedUser = 'undefined';
    this.role =  'undefined';
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedRoleUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
}
