import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { StylistsComponent } from './stylists/stylists.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    { path: '', redirectTo: 'stylists', pathMatch: 'full'},
    { path: 'products', component: ProductsComponent, data: {animation: 'productsPage'}}, 
    { path: 'services', loadChildren: () => import('./services/services.module').then(s => s.ServicesModule), 
        data: {animation: 'servicesPage'} },
    { path: 'stylists', component: StylistsComponent, data: {animation: 'stylistsPage'}},
    { path: 'contact', component: ContactComponent, data: { animation: 'contactPage'} }
  ]
}];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
