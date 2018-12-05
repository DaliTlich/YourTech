import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-prod-ord',
  templateUrl: './prod-ord.component.html',
  styleUrls: ['./prod-ord.component.css'],
  providers: [ProductService]
})

export class ProdOrdComponent implements OnInit, OnDestroy {

    public products: any;
    private abonnement = new Subscription();
    public selectedProduct: any;
    constructor(private productService: ProductService) {}

    ngOnInit() {
      this.abonnement = this.productService.getProductsByCat('ordettab').subscribe((response) => this.products = response);
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
