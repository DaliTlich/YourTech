import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-prod-accessoires',
  templateUrl: './prod-accessoires.component.html',
  styleUrls: ['./prod-accessoires.component.css'],
  providers: [ProductService]
})
export class ProdAccessoiresComponent implements OnInit {

    public products: any;
    public selectedProduct: any;
    constructor(private productService: ProductService) { }
    ngOnInit() {
      // this.products = this.productService.getProductsAcc().subscribe((response) => this.products = response);
      this.products = this.productService.getProductsByCat('acc').subscribe((response) => this.products = response);
    }

}
