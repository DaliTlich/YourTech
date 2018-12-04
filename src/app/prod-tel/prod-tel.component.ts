import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-prod-tel',
  templateUrl: './prod-tel.component.html',
  styleUrls: ['./prod-tel.component.css'],
  providers: [ProductService]

})
export class ProdTelComponent implements OnInit {

  public products: any;
  public selectedProduct: any;
  constructor(private productService: ProductService) { }
  ngOnInit() {
    // this.products = this.productService.getProductsTel().subscribe((response) => this.products = response);
    this.productService.getProductsByCat('tel').subscribe((response) => this.products = response);
  }

}
