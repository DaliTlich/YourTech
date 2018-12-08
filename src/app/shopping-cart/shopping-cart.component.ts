import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { ProductService } from '../Services/product.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems : any[];
  cartProducts : any[];
  public selectedProduct: any;

  constructor(private cartS : CartService,private pS:ProductService) { }

  ngOnInit() {
    this.cartProducts = [];
    let CartProduct :any;
    this.cartItems = this.cartS.initCart();

    console.log(this.cartItems);
    for (var i=0;i<this.cartItems.length;i++){
      let q = this.cartItems[i].quantity;

      this.pS.getProductById(this.cartItems[i].id).subscribe((response: any ) =>  {

        CartProduct = response;

        this.cartProducts.push({'id':response[0].id,'image':response[0].image,'nomProduit':response[0].nomProd,'quantity':q,'price':response[0].prix});
      } );

    }

  }

  delete(){
    const index = this.cartProducts.findIndex(product => product.id === this.selectedProduct.id);
    this.cartS.delete(index);
    this.cartProducts.splice(index,1);
  }

  addToCart(){
    const index = this.cartProducts.findIndex(product => product.id === this.selectedProduct.id);
    this.cartS.addCartItemByIndex(index);
    this.cartProducts[index].quantity++;
  }

  removeFromCart(){
    const index = this.cartProducts.findIndex(product => product.id === this.selectedProduct.id);
    if(this.cartProducts[index].quantity == 1){
      this.cartS.delete(index);
      this.cartProducts.splice(index,1);
    }else{
      this.cartS.removeCartItemByIndex(index);
      this.cartProducts[index].quantity--;
    }

  }

}
