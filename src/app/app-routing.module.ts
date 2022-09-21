import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationListProductPageComponent } from './pages/administration/registration-list-product-page/registration-list-product-page.component';
import { RegistrationProductPageComponent } from './pages/administration/registration-product-page/registration-product-page.component';
import { FramePageComponent } from './pages/master/frame-page.component';
import { ProductDetailsPageComponent } from './pages/store/product-details-page/product-details-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: 'registration', component: RegistrationProductPageComponent},
      {path: 'registration/:id', component: RegistrationProductPageComponent},
      {path: 'registration-list', component: RegistrationListProductPageComponent},
      {path: 'products', component: ProductsPageComponent},
      {path: 'product-details', component: ProductDetailsPageComponent},
      {path: 'product-details/:id', component: ProductDetailsPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
