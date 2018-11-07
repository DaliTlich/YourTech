import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
import { FooterComponent } from './footer/footer.component';
import { ProdOrdComponent } from './prod-ord/prod-ord.component';
import { ProdTelComponent } from './prod-tel/prod-tel.component';
import { ProdAccessoiresComponent } from './prod-accessoires/prod-accessoires.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemCategoryComponent,
    FooterComponent,
    ProdOrdComponent,
    ProdTelComponent,
    ProdAccessoiresComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'ordinateursettablettes', component: ProdOrdComponent},
      {path: 'telephonie', component: ProdTelComponent},
      {path: 'accessoires', component: ProdAccessoiresComponent}
    ]),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
