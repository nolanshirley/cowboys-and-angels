import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { StylistsComponent } from './stylists/stylists.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProductsComponent,
    ServicesComponent,
    StylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
