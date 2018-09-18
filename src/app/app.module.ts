import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProductComponent } from './product/product/product.component';
import { ProductlistingComponent } from './product/productlisting/productlisting.component';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ManageitemComponent } from './admin/manageitem/manageitem.component';
import { ManagespecificationComponent } from './admin/managespecification/managespecification.component';
import { ProductService } from './product/productservice/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutComponent } from './payment/checkout/checkout.component';
import { MycartComponent } from './mycart/mycart.component';
import { WowInterceptor } from './wow-interceptor';
import { ProductdisplayComponent } from './product/productdisplay/productdisplay.component';
import { SignupService } from './signup/signup.service';
import { MatSidenavModule, MatToolbarModule, MatBadgeModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatMenuModule, MatCardModule, MatButtonModule, MatGridListModule, MatListModule, MatDividerModule, MatSliderModule, MatTabsModule, MatButtonToggleModule, MatLineModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { AboutvideoComponent } from './aboutus/aboutvideo/aboutvideo.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
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
  },
  {
    path: 'payment',
    component: CheckoutComponent
  },
  {
    path: 'mycart',
    component: MycartComponent
  },
  {
    path: 'openItem',
    component: ProductdisplayComponent
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
    ManagespecificationComponent,
    CheckoutComponent,
    MycartComponent,
    ProductdisplayComponent,
    AboutvideoComponent,

  ],
  imports: [
    RouterModule.forRoot(
      routes
    ),
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatLineModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, { provide: HTTP_INTERCEPTORS, useClass: WowInterceptor, multi: true }, SignupService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, AboutvideoComponent, SignupComponent]
})
export class AppModule { }
