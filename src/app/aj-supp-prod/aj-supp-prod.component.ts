import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-aj-supp-prod',
  templateUrl: './aj-supp-prod.component.html',
  styleUrls: ['./aj-supp-prod.component.css'],
  providers: [ProductService]
})
export class AjSuppProdComponent implements OnInit {

  public products: any;
  public selectedProduct: any;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts().subscribe((response) => this.products = response);
  }

  supprimer() {
    this.productService.delProd(this.selectedProduct.id).subscribe(
      () => console.log('Produit avec  id = ${this.selectedProduct.id} supprimé !!!!!!!')
    );
  }

}
