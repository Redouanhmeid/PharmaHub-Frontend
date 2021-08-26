import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePharmacieComponent } from './create-pharmacie/create-pharmacie.component';
import { CreatePharmacienComponent } from './create-pharmacien/create-pharmacien.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { PharmacieDetailsComponent } from './pharmacie-details/pharmacie-details.component';
import { PharmacieListComponent } from './pharmacie-list/pharmacie-list.component';
import { PharmacienDetailsComponent } from './pharmacien-details/pharmacien-details.component';
import { PharmacienListComponent } from './pharmacien-list/pharmacien-list.component';
import { ProduitDetailsComponent } from './produit-details/produit-details.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { UpdatePharmacieComponent } from './update-pharmacie/update-pharmacie.component';
import { UpdatePharmacienComponent } from './update-pharmacien/update-pharmacien.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: WelcomeComponent },

  { path: 'produits', component: ProduitListComponent },
  { path: 'create-produit', component: CreateProduitComponent },
  { path: 'update-produit/:code', component: UpdateProduitComponent },
  { path: 'produit-details/:code', component: ProduitDetailsComponent },

  { path: 'pharmacies', component: PharmacieListComponent },
  { path: 'create-pharmacie', component: CreatePharmacieComponent },
  { path: 'update-pharmacie/:ice', component: UpdatePharmacieComponent },
  { path: 'pharmacie-details/:ice', component: PharmacieDetailsComponent },

  { path: 'pharmaciens', component: PharmacienListComponent },
  { path: 'create-pharmacien', component: CreatePharmacienComponent },
  { path: 'update-pharmacien/:id', component: UpdatePharmacienComponent },
  { path: 'pharmacien-details/:id', component: PharmacienDetailsComponent },
  
  { path: 'users', component: UserListComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
