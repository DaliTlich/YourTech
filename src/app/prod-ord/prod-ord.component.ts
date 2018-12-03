import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { IProduit } from 'src/app/Iterfaces/iproduit';


@Component({
  selector: 'app-prod-ord',
  templateUrl: './prod-ord.component.html',
  styleUrls: ['./prod-ord.component.css'],
  providers: [ProductService]
})

export class ProdOrdComponent implements OnInit {

    public products: any;
    public selectedProduct: any;
    constructor(private productService: ProductService) { }
    ngOnInit() {
      // this.products = this.productService.getProductsOrd().subscribe((response) => this.products = response);
      this.products = this.productService.getProductsByCat('ordettab').subscribe((response) => this.products = response);
    }
  }
