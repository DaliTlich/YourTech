import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AjSuppProdComponent } from './aj-supp-prod/aj-supp-prod.component';
import { AgmCoreModule } from '@agm/core';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AffproduitsComponent } from './affproduits/affproduits.component';
import { AffErreurComponent } from './aff-erreur/aff-erreur.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemCategoryComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    AjSuppProdComponent,
    ShoppingCartComponent,
    AffproduitsComponent,
    AffErreurComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'chariot', component: ShoppingCartComponent},
      {path: '', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'login', component: LoginComponent},
      {path: 'produits/:categorieName', component: AffproduitsComponent},
      {path: '**', component: AffErreurComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA9e7b6x65Ro3nmyf15mBRxS8MRvwgZamg'
    })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
