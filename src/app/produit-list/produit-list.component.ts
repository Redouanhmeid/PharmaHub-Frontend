import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  produits: Produit[] = [];
  nom: String;

  selectedValue = null;
  listOfOption: Array<{ value: string; text: string }> = [];
  nzFilterOption = () => true;
  constructor(private produitService: ProduitService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduits();
  }
  private getProduits(){
    this.produitService.getProduitsList().subscribe(data => {
      this.produits = data;
    })
 }

  search(): void {
    if(this.nom != ""){
      this.produits = this.produits.filter(res => {
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      });
    }else  if(this.nom == ""){
      this.ngOnInit();
    }
  }

  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  
}
