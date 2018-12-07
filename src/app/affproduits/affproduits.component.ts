import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Produit } from 'src/app/produit';
import { Subscription } from 'rxjs';
import { CartService } from '../Services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affproduits',
  templateUrl: './affproduits.component.html',
  styleUrls: ['./affproduits.component.css'],
  providers: [ProductService]
})
export class AffproduitsComponent implements OnInit, OnDestroy {

  public products: Produit[];
  public selectedProduct: any;
  public longueur: Number;
  public categorieName: string;
  private abonnement = new Subscription();
  constructor(private productService: ProductService, private cS: CartService, private routeActuelle: ActivatedRoute) { }

  ngOnInit() {
    this.abonnement = this.routeActuelle.params.subscribe(params => {
      this.categorieName = params['categorieName'];
      this.productService.getProductsByCat(this.categorieName).subscribe((response: Produit[] ) => {this.products = response;
            this.longueur = this.products.length; });
  });
  }

  sortBy(crit: String) {
    switch (crit) {
    case 'alphacroi' : {this.products.sort((a, b) => a.nomProd.localeCompare(b.nomProd)); break; }
    case 'alphadecroi' : {this.products.sort((a, b) => a.nomProd.localeCompare(b.nomProd)).reverse(); break; }
    case 'numcroi' : {this.products.sort((a, b) => a.prix - b.prix ); break; }
    case 'numdecroi' : {this.products.sort((a, b) => b.prix - a.prix ); break; }
  }
}

addItemToCart(idProduit: number) {
  this.cS.addCartItem(idProduit);
}
getNombreproduits() {
 return this.longueur;
}

ngOnDestroy() {
  this.abonnement.unsubscribe();
}

}
