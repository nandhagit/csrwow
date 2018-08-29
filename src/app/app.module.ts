import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '',
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ProductComponent,
    ProductlistingComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes, {useHash: true}
    ),
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
