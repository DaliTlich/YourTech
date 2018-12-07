import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Produit } from 'src/app/Classes/produit';

@Component({
  selector: 'app-aj-supp-prod',
  templateUrl: './aj-supp-prod.component.html',
  styleUrls: ['./aj-supp-prod.component.css'],
  providers: [ProductService]
})
export class AjSuppProdComponent implements OnInit {

  modelp = new Produit();
  submittedp = false;
  aff: boolean;
  public products: any;
  public selectedProduct: any;
  constructor(private productService: ProductService) { }

  onSubmit() { this.submittedp = true; }

  test() {
    this.modelp.image = this.modelp.image ;
    console.log( JSON.stringify(this.modelp));
  }

  newProd() {
    this.modelp = new Produit();
  }

  ngOnInit() {
    this.aff = false;
    this.productService.getProducts().subscribe((response) => this.products = response);
  }

  supprimer() {
    this.productService.delProd(this.selectedProduct.id).subscribe(
      () => console.log('Produit avec  id = ${this.selectedProduct.id} supprimé !!!!!!!')
    );
    const index = this.products.findIndex(product => product.productId === this.selectedProduct.id);
    this.products.splice(index, 1);
  }

  ajouter() {
    if (this.modelp.prix < 0 || isNaN(Number(this.modelp.prix))) {
      alert('Prix Invalide !');
    } else {
    this.aff = true;
    this.modelp.image = '/Images/' + this.modelp.image + '.jpg';
    this.productService.ajoutProd(this.modelp).subscribe(data => console.log(data), error => console.log(error));
  }
  }


}
