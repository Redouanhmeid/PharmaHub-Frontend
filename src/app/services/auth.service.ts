import { User } from './../classes/user';
import { Pharmacien } from './../classes/pharmacien';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacienService } from './pharmacien.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  pharmaciens: Pharmacien[] = [];
  clients : User[] = [];
  
  public loggedUser:string;
  public loggedId: number;
  public isloggedIn: Boolean = false;
  public roleP:string;
  public roleC:string;
  getLoggedId(){
    return this.loggedId;
  }

  getPharmaciens(){
    this.pharmacienService.getPharmaciensList().subscribe(data => {
      this.pharmaciens = data;
    })
  }
  getClients(){
    this.userService.getClientsList().subscribe(data => {
      this.clients = data;
    })
  }
  constructor(private pharmacienService: PharmacienService, private userService: UserService, private router: Router) { }
  SignInP(user :Pharmacien):Boolean{
    this.getPharmaciens();
    let validUser: Boolean = false;
    this.pharmaciens.forEach((curUser) => {
      if(user.nom_utilisateur=== curUser.nom_utilisateur && user.password==curUser.password) {
        validUser = true;
        this.loggedId = curUser.id;
        this.loggedUser = curUser.nom_utilisateur;
        this.isloggedIn = true;
        this.roleP = curUser.role;
        localStorage.setItem('loggedId',String(this.loggedId));
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('loggedRoleUser',this.roleP);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });
     return validUser;
  }
  SignInC(user :User):Boolean{
    this.getClients();
    let validUser: Boolean = false;
    this.clients.forEach((clt) => {
      if(user.nom_utilisateur=== clt.nom_utilisateur && user.password==clt.password) {
        validUser = true;
        this.loggedId = clt.id;
        this.loggedUser = clt.nom_utilisateur;
        this.isloggedIn = true;
        this.roleP = clt.role;
        localStorage.setItem('loggedId',String(this.loggedId));
        localStorage.setItem('loggedUser',this.loggedUser);
        localStorage.setItem('loggedRoleUser',this.roleP);
        localStorage.setItem('isloggedIn',String(this.isloggedIn));
      }
    });
     return validUser;
  }

  isPharmacien():Boolean{
    if (!this.roleP) //this.roles== undefiened
       return false;
    return (this.roleP.indexOf('pharmacien') >-1);
  }
  isClient():Boolean{
    if (!this.roleC) //this.roles== undefiened
       return false;
    return (this.roleC.indexOf('client') >-1);
  }

  logout() { 
    this.loggedId = 0;
    this.isloggedIn= false;
    this.loggedUser = 'undefined';
    this.roleP =  'undefined';
    this.roleC =  'undefined';
    localStorage.removeItem('loggedId');
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('loggedRoleUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
}
