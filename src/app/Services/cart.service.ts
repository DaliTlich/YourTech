import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  

  constructor(private cS: CookieService,private pS: ProductService) { 
    if (!this.cS.get('CartCookie'))   this.cS.set('CartCookie', '');
  }

  initCart(){
    let cartItems :any[];
    cartItems = [];
    if (this.cS.get('CartCookie')) {
      let s = this.cS.get('CartCookie').split(",");
      for (let i of s) {

        cartItems.push({ 'id' : Number(i.split(' ')[0]) , 'quantity' : Number(i.split(' ')[1])});
      }
    } else {
      this.cS.set('CartCookie', '');
    }
    return cartItems;
  }

  // add item in shopping cart
  addCartItem(id) {
    let a,q:number;
    if (this.cS.get('CartCookie') == ''){
      this.cS.set('CartCookie',String(id) + ' 1');
      return false;
    }  
    let CookieContent = this.cS.get('CartCookie').split(',');
    for(var i =0;i<CookieContent.length;i++){
      a = Number(CookieContent[i].split(' ')[0]);
      if (id == a){
        q = Number(CookieContent[i].split(' ')[1]);
        
        CookieContent[i] = CookieContent[i].replace(' ' + String(q),' ' + String(q+1));
        this.cS.set('CartCookie',CookieContent.join(','));
        return true;
        
      }
    }
    CookieContent.push(String(id) + ' 1')
    this.cS.set('CartCookie',CookieContent.join(','));
    return false;
  }

  getTotalCount() {
    if (this.cS.get('CartCookie') =='')return 0;
    let Count = 0;
    let CookieContent = this.cS.get('CartCookie').split(',');
    for (let i of CookieContent){
      Count = Count + Number(i.split(' ')[1]);
    }
    return Count;
  }

  

  delete(index){
    let s:string;
    let CookieContent = this.cS.get('CartCookie').split(',');

        if (CookieContent.length == 1) this.cS.set('CartCookie','');
        else{
          if (index==CookieContent.length-1){ 
            s = this.cS.get('CartCookie').replace(',' + CookieContent[index],'');
            this.cS.set('CartCookie',s);
            console.log("HI " + s)
          }
          else {
            s = this.cS.get('CartCookie').replace(CookieContent[index] + ',','');
            this.cS.set('CartCookie',s);
            console.log("HI " + s)
          }
        
      }
    }
    
    addCartItemByIndex(index){
      let CookieContent = this.cS.get('CartCookie').split(',');
      let tmp = CookieContent[index].split(' ')[0] + ' ' + String(Number(CookieContent[index].split(' ')[1])+1);
      let s = this.cS.get('CartCookie').replace(CookieContent[index],tmp);
      this.cS.set('CartCookie',s);
    }


    removeCartItemByIndex(index){
      let CookieContent = this.cS.get('CartCookie').split(',');
      let tmp = CookieContent[index].split(' ')[0] + ' ' + String(Number(CookieContent[index].split(' ')[1])-1);
      let s = this.cS.get('CartCookie').replace(CookieContent[index],tmp);
      this.cS.set('CartCookie',s);
    }
  
}
