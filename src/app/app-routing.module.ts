import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { loginGuard } from './shared/login.guard';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';

import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [loginGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout/:id', component: CheckOutComponent },
      { path: 'wishlist', component: WishListComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'allorders', component: AllOrdersComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'home', component: HomeComponent },
      { path: 'categories', component: CategoriesComponent },
      { path: 'brands', component: BrandsComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
