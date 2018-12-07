import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Produit } from 'src/app/Classes/produit';
import { Subscription } from 'rxjs';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ProductService]
})
export class HomeComponent implements OnInit, OnDestroy {

  public products: Produit[];
  public selectedProduct: any;
  private abonnement = new Subscription();
  constructor(private productService: ProductService, private cS: CartService) { }

  ngOnInit() {
    this.abonnement = this.productService.getNewProds().subscribe( (response: Produit[]) => this.products = response);
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

ngOnDestroy() {
  this.abonnement.unsubscribe();
}

}
