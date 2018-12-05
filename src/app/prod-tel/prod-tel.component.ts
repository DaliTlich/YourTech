import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Subscription } from 'rxjs';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-prod-tel',
  templateUrl: './prod-tel.component.html',
  styleUrls: ['./prod-tel.component.css'],
  providers: [ProductService]

})
export class ProdTelComponent implements OnInit, OnDestroy {

  public products: any;
  public selectedProduct: any;
  private abonnement = new Subscription();
  constructor(private productService: ProductService,private cS:CartService) { }

  ngOnInit() {
    this.abonnement = this.productService.getProductsByCat('tel').subscribe((response) => this.products = response);
  }

  sortBy(crit: String) {
    switch (crit) {
    case 'alphacroi' : {this.products.sort((a, b) => a.nomProd.localeCompare(b.nomProd)); break; }
    case 'alphadecroi' : {this.products.sort((a, b) => a.nomProd.localeCompare(b.nomProd)).reverse(); break; }
    case 'numcroi' : {this.products.sort((a, b) => a.prix - b.prix ); break; }
    case 'numdecroi' : {this.products.sort((a, b) => b.prix - a.prix ); break; }
  }
}

ngOnDestroy() {
  this.abonnement.unsubscribe();
}

}
