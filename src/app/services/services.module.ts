import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ChildrenComponent } from './children/children.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [
    ServicesComponent,
    MenComponent,
    WomenComponent,
    ChildrenComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FontAwesomeModule
  ]
})
export class ServicesModule { }
