import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarBlankComponent } from './components/navbar-blank/navbar-blank.component';
import { NavbarAuthComponent } from './components/navbar-auth/navbar-auth.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MinifiedTextPipe } from './shared/pipes/minified-text.pipe';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    FooterComponent,
    NavbarBlankComponent,
    NavbarAuthComponent,
    BrandsComponent,
    CartComponent,
    CategoriesComponent,
    HomeComponent,
    ProductsComponent,
    WishListComponent,
    LoginComponent,
    RegisterComponent,
    SearchPipe,
    ProductDetailsComponent,
    MinifiedTextPipe,
    CheckOutComponent,
    AllOrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
