import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FramePageComponent } from './pages/master/frame-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { RegistrationProductPageComponent } from './pages/administration/registration-product-page/registration-product-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsPageComponent } from './pages/store/product-details-page/product-details-page.component';
import { RegistrationListProductPageComponent } from './pages/administration/registration-list-product-page/registration-list-product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsPageComponent,
    FramePageComponent,
    ProductCardComponent,
    RegistrationProductPageComponent,
    ProductDetailsPageComponent,
    RegistrationListProductPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
