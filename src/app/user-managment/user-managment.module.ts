import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { SharedModule } from "../@shared/shared.module";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule } from '@angular/forms';
const routes: Routes = [
 {path:'', redirectTo:'deals',pathMatch:'full'},
 {path:'deals', component:DealsComponent}
]

@NgModule({
    declarations: [
        LayoutComponent,
        DealsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        DragDropModule,
        HttpClientModule,
        FormsModule,
        NgxSpinnerModule
    ]
})

export class UserManagmentModule { }
