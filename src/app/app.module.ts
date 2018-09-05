import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product/product.component';
import { ProductlistingComponent } from './product/productlisting/productlisting.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ManageitemComponent } from './admin/manageitem/manageitem.component';
import { ManagespecificationComponent } from './admin/managespecification/managespecification.component';
import { ProductService } from './product/productservice/product.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'aboutus',
      component: AboutusComponent
  },
  {
      path: 'products',
      component: ProductlistingComponent
  },
  {
      path: 'signup',
      component: SignupComponent
  },
  {
    path: 'admin',
    component: ManageitemComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ProductComponent,
    ProductlistingComponent,
    SignupComponent,
    ManageitemComponent,
    ManagespecificationComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
