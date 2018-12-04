import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Produit } from 'src/app/produit';

@Component({
  selector: 'app-prod-accessoires',
  templateUrl: './prod-accessoires.component.html',
  styleUrls: ['./prod-accessoires.component.css'],
  providers: [ProductService]
})
export class ProdAccessoiresComponent implements OnInit {

    public products: any;
    public selectedProduct: any;
    public sortBy: any;
    constructor(private productService: ProductService) { }
    ngOnInit() {
      // this.products = this.productService.getProductsAcc().subscribe((response) => this.products = response);
      this.productService.getProductsByCat('acc').subscribe((response: Produit[] ) => this.products = response);
    }
    test() {
      console.log('cv');
    }

}
