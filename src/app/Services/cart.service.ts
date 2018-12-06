import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[];

  constructor(private cS: CookieService) {
    this.cartItems = [];
    if (this.cS.get('CartCookie')) {
      let s = this.cS.get('CartCookie').split(",");
      for (let i of s) {
        this.cartItems.push({id: i});
      }
    } else {
      this.cS.set('CartCookie', '');
    }
  }

  // add item in shopping cart
  addCartItem(id) {
    this.cartItems.push({id: id});
    if (this.cS.get('CartCookie') == '') this.cS.set('CartCookie', id);
    else this.cS.set('CartCookie',this.cS.get('CartCookie') + id + ',');
    return false;
  }

  getTotalCount() {
    if(this.cS.get('CartCookie') == '') return 0
    else {
      let s = this.cS.get('CartCookie').split(',');
      return s.length;
    }
  }

}
