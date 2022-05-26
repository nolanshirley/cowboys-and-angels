import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ChildrenComponent } from "./children/children.component";
import { MenComponent } from "./men/men.component";
import { ServicesComponent } from "./services.component";
import { WomenComponent } from "./women/women.component";

const routes: Routes = [
    {
        path: '',
        component: ServicesComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'women' },
            { path: 'women', component: WomenComponent },
            { path: 'men', component: MenComponent },
            { path: 'children', component: ChildrenComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicesRoutingModule { }
